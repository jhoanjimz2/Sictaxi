import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEmpresaComponent } from './perfil-empresa.component';

const routes: Routes = [{ path: '', component: PerfilEmpresaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilEmpresaRoutingModule { }
