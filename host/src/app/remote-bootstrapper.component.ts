import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  Component,
  ElementRef,
  OnInit,
  Input as RouteInput,
  inject,
} from '@angular/core';

export interface RemoteConfiguration {
  remoteName: string;
  exposedModule: string;
  elementName: string;
}

export const initWrapperConfig: RemoteConfiguration = {
  remoteName: '',
  exposedModule: '',
  elementName: '',
};

@Component({
  selector: 'host-remote-bootstrapper',
  template: '',
})
export class RemoteBootstrapperComponent implements OnInit {
  readonly #elementRef = inject(ElementRef);

  @RouteInput() config = initWrapperConfig;

  async ngOnInit() {
    const { exposedModule, remoteName, elementName } = this.config;

    await loadRemoteModule(remoteName, exposedModule);

    const root = document.createElement(elementName);

    this.#elementRef.nativeElement.appendChild(root);
  }
}
