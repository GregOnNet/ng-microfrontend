import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

const routerNavigationStartedEventName = 'x-router-navigation-started';

export function useRouterNavigateListener() {
  const document = inject(DOCUMENT);
  const router = inject(Router);

  return {
    listen: async () => await handleHostRouterNavigation(document, router),
  };
}

async function handleHostRouterNavigation(document: Document, router: Router) {
  document.addEventListener(routerNavigationStartedEventName, async (event) => {
    if (
      event instanceof CustomEvent &&
      event.detail instanceof NavigationStart
    ) {
      await router.navigateByUrl(event.detail.url);
    }
  });
}
