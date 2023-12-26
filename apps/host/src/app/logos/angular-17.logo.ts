import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-17-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <img
      ngSrc="/assets/logos/ng-17.png"
      class="inline"
      alt="Angular 17 Logo"
      width="18"
      height="18"
    />
  `,
})
export class Angular17Logo {}
