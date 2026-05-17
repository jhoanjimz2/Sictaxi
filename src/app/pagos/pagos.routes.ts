import { Routes } from "@angular/router";

export const rutas: Routes = [
  {
    path: 'exitoso/:data',
    loadChildren: () => import('./exitoso/exitoso.module').then(m => m.ExitosoModule),
  },
  { path: '**', redirectTo: 'exitoso', pathMatch: 'full' },
];
