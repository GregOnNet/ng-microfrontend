import { APP_INITIALIZER, ApplicationConfig, Provider } from '@angular/core';
import {
  NavigationStart,
  Router,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';

import { DOCUMENT } from '@angular/common';
import { filter, map, tap } from 'rxjs';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideRouterNavigationEmitter(),
  ],
};

const routerNavigationStartedEventName = 'x-router-navigation-started';

function provideRouterNavigationEmitter(): Provider {
  return {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory(router: Router, document: Document) {
      return () => {
        router.events
          .pipe(
            filter(
              (event): event is NavigationStart =>
                event instanceof NavigationStart
            ),
            map(
              (event) =>
                new CustomEvent(routerNavigationStartedEventName, {
                  detail: event,
                })
            ),
            tap((event) => document.dispatchEvent(event))
          )
          .subscribe();

        return Promise.resolve();
      };
    },
    deps: [Router, DOCUMENT],
  };
}
