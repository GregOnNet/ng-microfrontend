import { DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, NgZone, Provider } from '@angular/core';
import { Router } from '@angular/router';

export function provideRemote(options: {
  host: {
    ngZone: { useShared: boolean };
    router: {
      handleNavigationStart: boolean;
    };
  };
  router: {
    useHashLocationStrategy: boolean;
  };
}): Provider[] {
  const sharedNgZoneProvider: Provider = globalThis.ngZone
    ? { provide: NgZone, useValue: globalThis.ngZone }
    : [];

  const initializerProvider: Provider = {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory(router: Router, document: Document) {
      return () => {
        const initializers: (() => Promise<unknown>)[] = [];

        initializers.push(() =>
          activateWebComponentRouting(
            router,
            options.router.useHashLocationStrategy
          )
        );

        options.host.router.handleNavigationStart
          ? initializers.push(() => handleHostNavigationStart(document, router))
          : {};

        return Promise.all(initializers.map((initializer) => initializer()));
      };
    },
    deps: [Router, DOCUMENT],
  };

  return options.host.ngZone.useShared
    ? [initializerProvider, sharedNgZoneProvider]
    : [initializerProvider];
}

// Gets routing to work with WebComponent
// see: "Workaround for Routers in Web Component" at https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-2-multi-version-and-multi-framework-solutions-with-angular-elements-and-web-components/
export async function activateWebComponentRouting(
  router: Router,
  useHash: boolean
): Promise<void> {
  let url: string;

  if (!useHash) {
    url = `${location.pathname.substring(1)}${location.search}`;
    await router.navigateByUrl(url);
    window.addEventListener(
      'popstate',
      async () => await router.navigateByUrl(url)
    );
  } else {
    url = `${location.hash.substring(1)}${location.search}`;
    await router.navigateByUrl(url);
    window.addEventListener(
      'hashchange',
      async () => await router.navigateByUrl(url)
    );
  }
}

export const hostNavigationStarted = 'x-host-navigation-start';

async function handleHostNavigationStart(document: Document, router: Router) {
  document.addEventListener(hostNavigationStarted, async (event) => {
    if (event instanceof CustomEvent) {
      await router.navigateByUrl(event.detail.url);
    }
  });
}
