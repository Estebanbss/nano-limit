import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'current',
    loadComponent: () => import('./current/current.component').then((m) => m.CurrentComponent),
  },

  {
    path: 'operations',
    loadComponent: () => import('./operations/operations.component').then((m) => m.OperationsComponent),
  },

  {
    path: 'bots',
    loadComponent: () => import('./bots/bots.component').then((m) => m.BotsComponent),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }

];
