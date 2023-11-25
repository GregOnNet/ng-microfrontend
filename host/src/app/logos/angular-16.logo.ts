import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-16-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <img
      ngSrc="/assets/logos/ng-16.svg"
      class="inline"
      alt="Angular 16 Logo"
      width="18"
      height="18"
    />
  `,
})
export class Angular16Logo {}
