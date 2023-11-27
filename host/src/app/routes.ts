import { Routes } from '@angular/router';
import { remotes } from '../remotes';
import { HostComponent } from './host/host.component';
import {
  RemoteFrame,
  RemoteFrameConfiguration,
} from './remote-frame.component';
import { routeStartWith } from './route-starts-with.guard';

export const routes: Routes = [
  {
    path: '',
    component: HostComponent,
  },
  {
    matcher: routeStartWith('posts'),
    component: RemoteFrame,
    data: {
      config: <RemoteFrameConfiguration>{
        remoteName: remotes['remote-ng-17'].name,
        exposedModule: remotes['remote-ng-17'].exposedModule,
        elementName: 'ng17-root',
      },
    },
  },
  {
    matcher: routeStartWith('star-wars'),
    component: RemoteFrame,
    data: {
       config: <RemoteFrameConfiguration>{
        remoteName: remotes['remote-ng-16'].name,
        exposedModule: remotes['remote-ng-16'].exposedModule,
        elementName: 'ng16-root',
      },
    }
];
