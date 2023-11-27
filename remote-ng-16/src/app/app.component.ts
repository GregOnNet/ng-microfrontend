import { Component } from '@angular/core';
import { connectRouter } from './connect-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'remote-ng-16';

  constructor() {
    connectRouter();
  }
}
