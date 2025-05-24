// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  {
    path: 'success',
    component: SuccessComponent
  },
  // Optional: redirect root to a landing page or success
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  // Optional: catch-all route
  {
    path: '**',
    redirectTo: '/'
  }
];
