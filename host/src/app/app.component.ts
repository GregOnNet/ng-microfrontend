import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { remotes } from '../remotes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <ul>
      <li><a routerLink="/">Start</a></li>
      <li>Remote Angular 16 (coming soon)</li>
      <li><a [routerLink]="[remoteNg17.name]">Remote Angular 17</a></li>
    </ul>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  remoteNg17 = remotes['remote-ng-17'];
}
