import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function useRouterConnector(useHash = false) {
  const router = inject(Router);

  return {
    connect: async () => connectRouter(router, useHash),
  };
}

// Gets routing to work with WebComponent
// see: "Workaround for Routers in Web Component" at https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-2-multi-version-and-multi-framework-solutions-with-angular-elements-and-web-components/
export async function connectRouter(
  router = inject(Router),
  useHash = false
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
