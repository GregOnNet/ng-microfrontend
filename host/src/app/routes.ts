import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { remotes } from '../remotes';
import { HostComponent } from './host/host.component';

export const routes: Routes = [
  {
    path: '',
    component: HostComponent,
  },
  {
    path: remotes['remote-ng-17'].name,
    loadChildren: () =>
      loadRemoteModule(
        remotes['remote-ng-17'].name,
        remotes['remote-ng-17'].exposedRoutes
      ).then((m) => m.routes),
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
