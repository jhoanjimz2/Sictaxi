import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasAutorizadasComponent } from './empresas-autorizadas.component';

const routes: Routes = [{ path: '', component: EmpresasAutorizadasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasAutorizadasRoutingModule { }
