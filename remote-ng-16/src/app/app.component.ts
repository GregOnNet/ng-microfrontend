import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { connectRouter } from './connect-router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'remote-ng-16';

  constructor() {
    connectRouter();
  }
}
