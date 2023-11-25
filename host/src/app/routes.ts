import { Routes } from '@angular/router';
import { remotes } from '../remotes';
import { HostComponent } from './host/host.component';
import {
  RemoteBootstrapperComponent,
  RemoteConfiguration,
} from './remote-bootstrapper.component';
import { routeStartWith } from './route-starts-with.guard';

export const routes: Routes = [
  {
    path: '',
    component: HostComponent,
  },
  {
    matcher: routeStartWith('posts'),
    component: RemoteBootstrapperComponent,
    data: {
      config: <RemoteConfiguration>{
        remoteName: remotes['remote-ng-17'].name,
        exposedModule: remotes['remote-ng-17'].exposedModule,
        elementName: 'ng17-root',
      },
    },
  },
  // TODO: Get Angular 16 to work with Angular 17 Host
  // {
  //   path: remotes['remote-ng-16'].name,
  //   loadChildren: () =>
  //     loadRemoteModule(
  //       remotes['remote-ng-16'].name,
  //       remotes['remote-ng-16'].exposedRoutes
  //     ),
  // },
];
