import { Routes } from "@angular/router";

export const rutas: Routes = [
  {
    path: 'planes',
    loadChildren: () => import('./planes/planes.module').then( m => m.PlanesModule),
  },
  { path: '**', redirectTo: 'planes', pathMatch: 'full' },
]
