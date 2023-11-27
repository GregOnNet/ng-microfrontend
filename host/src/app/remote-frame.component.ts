import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  Component,
  ElementRef,
  OnInit,
  Input as RouteInput,
  inject,
} from '@angular/core';

export interface RemoteFrameConfiguration {
  remoteName: string;
  exposedModule: string;
  elementName: string;
}

export const remoteFrameDefaults: RemoteFrameConfiguration = {
  remoteName: '',
  exposedModule: '',
  elementName: '',
};

@Component({ template: '' })
export class RemoteFrame implements OnInit {
  readonly #elementRef = inject(ElementRef);

  @RouteInput() config = remoteFrameDefaults;

  async ngOnInit() {
    const { exposedModule, remoteName, elementName } = this.config;

    await loadRemoteModule(remoteName, exposedModule);

    const root = document.createElement(elementName);

    this.#elementRef.nativeElement.appendChild(root);
  }
}
