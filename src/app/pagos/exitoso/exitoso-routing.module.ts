import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitosoComponent }     from './exitoso.component';

const routes: Routes = [
  {
    path: '',
    component: ExitosoComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExitosoRoutingModule { }
