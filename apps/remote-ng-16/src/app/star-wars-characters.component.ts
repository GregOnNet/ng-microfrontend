import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  template: `
    <h1>Luke</h1>
    <code>
      <pre>{{ luke$ | async | json }}</pre>
    </code>
  `,
})
export class StarWarsCharacterComponent {
  readonly #http = inject(HttpClient);

  protected readonly luke$ = this.#http.get('https://swapi.dev/api/people/1');
}
