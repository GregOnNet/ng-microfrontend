import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { useRouterConnector } from './use-router-connector';
import { useRouterNavigateListener } from './use-router-navigate-listener';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  readonly #routerConnector = useRouterConnector();
  readonly #routerNavigationStartListener = useRouterNavigateListener();

  async ngOnInit(): Promise<void> {
    await this.#routerConnector.connect();
    await this.#routerNavigationStartListener.listen();
  }
}
