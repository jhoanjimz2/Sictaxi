import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { validarTokenGuard }       from './guards/validar-token.guard';
import { validarSecretariaGuard }  from './guards/validar-secretaria.guard';
import { validarEmpresaGuard }     from './guards/validar-empresa.guard';
import { redirectGuard }           from './guards/redirect.guard';
import { DummyComponent }          from './shared/dummy/dummy.component';
import { validarNoTokenGuard }     from './guards/validar-no-token.guard';
import { validarSuscripcionGuard } from './guards/validar-suscripcion.guard';

const routes: Routes = [
  {
    path: 'secretaria',
    loadChildren: () => import('./secretaria/secretaria.module').then(m => m.SecretariaModule),
    canActivate: [validarTokenGuard, validarSecretariaGuard,
      // validarSuscripcionGuard
    ],
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule),
    canActivate: [validarTokenGuard, validarEmpresaGuard,
      // validarSuscripcionGuard
    ],
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pagos/pagos.module').then(m => m.PagosModule),
    canActivate: [validarTokenGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [validarNoTokenGuard]
  },
  {
    path: 'suscripciones',
    loadChildren: () => import('./suscripciones/suscripciones.module').then(m => m.SuscripcionesModule),
    canActivate: [validarTokenGuard],
  },
  {
    path: '',
    redirectTo: 'redirect',
    pathMatch: 'full'
  },
  {
    path: 'redirect',
    canActivate: [redirectGuard],
    component: DummyComponent
  },
  {
    path: '**',
    redirectTo: 'redirect',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
