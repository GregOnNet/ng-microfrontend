import { initFederation } from '@angular-architects/native-federation';
import { remotes } from './remotes';

initFederation({
  [remotes['remote-ng-17'].name]: remotes['remote-ng-17'].manifestUri,
})
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
