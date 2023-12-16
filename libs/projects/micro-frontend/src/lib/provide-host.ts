import { DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, NgZone, Provider } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { filter, map, tap } from 'rxjs';

function isNavigationStart(candidate: unknown): candidate is NavigationStart {
  return candidate instanceof NavigationStart;
}

export const hostNavigationStarted = 'x-host-navigation-start';
function createHostNavigationStarted(event: NavigationStart): CustomEvent {
  return new CustomEvent(hostNavigationStarted, { detail: event });
}

export function provideHost(options: {
  ngZone: { share: boolean };
  router: { share: { navigationStart: boolean } };
}): Provider {
  return {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory(router: Router, document: Document, ngZone: NgZone) {
      return () => {
        const navigationStartEmitter$ = router.events.pipe(
          filter(isNavigationStart),
          map(createHostNavigationStarted),
          tap((event) => document.dispatchEvent(event))
        );

        options.ngZone.share ? (globalThis.ngZone = ngZone) : {};
        options.router.share.navigationStart
          ? navigationStartEmitter$.subscribe()
          : {};

        return Promise.resolve();
      };
    },
    deps: [Router, DOCUMENT, NgZone],
  };
}
