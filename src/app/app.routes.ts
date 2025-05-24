// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { Success2Component } from './success2/success2.component';

export const routes: Routes = [
  {
    path: 'success',
    component: SuccessComponent
  },
    {
    path: 'success2',
    component: Success2Component
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
