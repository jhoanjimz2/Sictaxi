import { Routes } from "@angular/router";

export const rutas: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule),
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
]