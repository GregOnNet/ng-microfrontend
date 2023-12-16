import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  AfterRenderPhase,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  Input as RouteInput,
  afterNextRender,
  inject,
} from '@angular/core';

export interface RemoteFrameConfiguration {
  remoteName: string;
  exposedModule: string;
  elementName: string;
  exposedCss?: string;
}

export const remoteFrameDefaults: RemoteFrameConfiguration = {
  remoteName: '',
  exposedModule: '',
  elementName: '',
};

@Component({ selector: 'app-remote-frame', template: '' })
export class RemoteFrameComponent implements OnInit, OnDestroy {
  readonly #elementRef = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  #linkElementWithRemoteCss: HTMLLinkElement | null = null;

  @RouteInput() config = remoteFrameDefaults;

  constructor() {
    afterNextRender(() => this.#createLinkElement(this.config.exposedCss), {
      phase: AfterRenderPhase.Write,
    });
  }

  async ngOnInit() {
    const { exposedModule, remoteName, elementName } = this.config;

    await loadRemoteModule(remoteName, exposedModule);

    const root = document.createElement(elementName);

    this.#elementRef.nativeElement.appendChild(root);
  }

  ngOnDestroy(): void {
    this.#removeLinkElement(this.#linkElementWithRemoteCss);
  }

  #createLinkElement(exposedCss: string | undefined): void {
    if (!exposedCss) return;

    this.#linkElementWithRemoteCss = this.#renderer.createElement('link');

    this.#renderer.setAttribute(
      this.#linkElementWithRemoteCss,
      'rel',
      'stylesheet'
    );
    this.#renderer.setAttribute(
      this.#linkElementWithRemoteCss,
      'href',
      exposedCss
    );

    this.#renderer.appendChild(document.head, this.#linkElementWithRemoteCss);
  }

  #removeLinkElement(linkElement: HTMLLinkElement | null) {
    if (!linkElement) return;

    this.#renderer.removeChild(document.head, linkElement);
  }
}
