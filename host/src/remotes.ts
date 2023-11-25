export const remotes = {
  'remote-ng-17': {
    name: 'remote-ng-17',
    manifestUri: 'http://localhost:4217/remoteEntry.json',
    exposedModule: './bootstrapper',
  },
  'remote-ng-16': {
    name: 'remote-ng-16',
    manifestUri: 'http://localhost:4216/remoteEntry.json',
    exposedRoutes: './routes',
  },
} as const;
