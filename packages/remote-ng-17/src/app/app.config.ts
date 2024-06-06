import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideRemote } from './provide-remote';

import { routes } from './routes';

import localeDe from './i18n/angular/de-de';

registerLocaleData(localeDe, 'de-DE');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRemote({
      host: {
        ngZone: { useShared: true },
        router: { handleNavigationStart: true },
      },
      router: { useHashLocationStrategy: false },
    }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'de-DE' },
  ],
};
