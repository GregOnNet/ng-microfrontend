import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { connectRouter } from './connect-router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    connectRouter();
  }
}
