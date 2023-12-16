import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { remotes } from '../remotes';
import { Angular16Logo } from './logos/angular-16.logo';
import { Angular17Logo } from './logos/angular-17.logo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Angular17Logo,
    Angular16Logo,
  ],
  template: `
    <main class="grid gap-4 p-4">
      <h1 class="text-xl font-bold">Micro Frontend Environment</h1>
      <nav>
        <ul class="flex border-b">
          <li class="-mb-px mr-1">
            <a
              routerLink="/"
              class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
              [routerLinkActive]="[
                'border-l',
                'border-t',
                'border-r',
                'rounded-t',
                'text-blue-700'
              ]"
              [routerLinkActiveOptions]="{ exact: true }"
              ><app-angular-17-logo /> Host</a
            >
          </li>
          <li class="mr-1">
            <a
              routerLink="/star-wars"
              class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
              [routerLinkActive]="[
                'border-l',
                'border-t',
                'border-r',
                'rounded-t',
                'text-blue-700'
              ]"
              ><app-angular-16-logo /> Star Wars</a
            >
          </li>
          <li class="-mb-px mr-1">
            <a
              [routerLink]="['/posts']"
              class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
              [routerLinkActive]="[
                'border-l',
                'border-t',
                'border-r',
                'rounded-t',
                'text-blue-700'
              ]"
              [routerLinkActiveOptions]="{ exact: true }"
            >
              <app-angular-17-logo /> Posts</a
            >
          </li>
          <li class="-mb-px mr-1">
            <a
              [routerLink]="['/posts', 1]"
              class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
              [routerLinkActive]="[
                'border-l',
                'border-t',
                'border-r',
                'rounded-t',
                'text-blue-700'
              ]"
              [routerLinkActiveOptions]="{ exact: true }"
            >
              <app-angular-17-logo /> Post (Id: 1)</a
            >
          </li>
          <li class="-mb-px mr-1">
            <a
              [routerLink]="['/posts', 'german-now']"
              class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
              [routerLinkActive]="[
                'border-l',
                'border-t',
                'border-r',
                'rounded-t',
                'text-blue-700'
              ]"
              [routerLinkActiveOptions]="{ exact: true }"
            >
              <app-angular-17-logo /> German Locale</a
            >
          </li>
        </ul>
      </nav>

      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {
  protected readonly remoteNg17 = remotes['remote-ng-17'];
}
