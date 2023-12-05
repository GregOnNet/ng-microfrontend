import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

(async () => {
  const { injector } = await createApplication(appConfig);

  const ng17Root = createCustomElement(AppComponent, { injector });

  customElements.define('ng17-root', ng17Root);
})();
