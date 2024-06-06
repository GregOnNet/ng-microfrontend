import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './app.component.tailwind.css',
})
export class AppComponent {}
