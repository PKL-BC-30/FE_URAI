import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';
import Home from './pages/home';
import AboutData from './pages/about.data';

// Rute yang diimpor

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    data: AboutData,
  },
  {
    path: '/homepage',  // Tambahkan rute untuk login
    component: lazy(() => import('./homepage')),  // Pemakaian lazy untuk pemuatan malas
  },
  {
    path: '/login',  // Tambahkan rute untuk login
    component: lazy(() => import('./login')),  // Pemakaian lazy untuk pemuatan malas
  },
  {
    path: '/register',  // Tambahkan rute untuk register
    component: lazy(() => import('./register')),  // Pemakaian lazy untuk pemuatan malas
  },
  {
    path: '/homemain',  // Tambahkan rute untuk register
    component: lazy(() => import('./homemain')),  // Pemakaian lazy untuk pemuatan malas
  },
  {
    path: '/total',  // Tambahkan rute untuk register
    component: lazy(() => import('./total')),  // Pemakaian lazy untuk pemuatan malas
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },

];
