import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'oren',
    loadChildren: () => import('oren/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'kfir',
    loadChildren: () => import('kfir/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'achia',
    loadChildren: () => import('achia/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
