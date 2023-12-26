import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideHost } from 'micro-frontend';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHost({
      ngZone: { share: true },
      router: { share: { navigationStart: true } },
    }),
  ],
};
