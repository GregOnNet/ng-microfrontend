import { Routes } from '@angular/router';
import { remotes } from '../remotes';
import { HostComponent } from './host/host.component';
import {
  RemoteFrameComponent,
  RemoteFrameConfiguration,
} from './remote-frame.component';
import { routeStartWith } from './route-starts-with.guard';

export const routes: Routes = [
  {
    path: '',
    component: HostComponent,
  },
  {
    matcher: routeStartWith('star-wars'),
    component: RemoteFrameComponent,
    data: {
      config: <RemoteFrameConfiguration>{
        remoteName: remotes['remote-ng-16'].name,
        exposedModule: remotes['remote-ng-16'].exposedModule,
        elementName: 'ng16-root',
      },
    },
  },
  {
    matcher: routeStartWith('posts'),
    component: RemoteFrameComponent,
    data: {
      config: <RemoteFrameConfiguration>{
        remoteName: remotes['remote-ng-17'].name,
        exposedModule: remotes['remote-ng-17'].exposedModule,
        exposedCss: remotes['remote-ng-17'].exposedCss,
        elementName: 'ng17-root',
      },
    },
  },
];
