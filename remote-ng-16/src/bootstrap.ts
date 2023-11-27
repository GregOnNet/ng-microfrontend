import { provideHttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';

(async () => {
  const app = await createApplication({
    providers: [
      // If zone.js is provided by the Host Application use NgZone-Instance of the host instead of creating a new one.
      globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
      provideRouter(routes),
      provideHttpClient(),
    ],
  });

  const ng16Root = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('ng16-root', ng16Root);
})();
