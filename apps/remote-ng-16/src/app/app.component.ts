import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { useRouterConnector } from './use-router-connector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly #routerConnector = useRouterConnector();

  async ngOnInit(): Promise<void> {
    await this.#routerConnector.connect();
  }
}
