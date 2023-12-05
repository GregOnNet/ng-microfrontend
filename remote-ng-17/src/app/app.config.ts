import { ApplicationConfig, LOCALE_ID, NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routes';

import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localeDe from './i18n/angular/de-de';

registerLocaleData(localeDe, 'de-DE');

export const appConfig: ApplicationConfig = {
  providers: [
    // If zone.js is provided by the Host Application use NgZone-Instance of the host instead of creating a new one.
    globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'de-DE' },
  ],
};
