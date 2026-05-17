import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarConductoresComponent } from './buscar-conductores.component';

const routes: Routes = [
  {
    path: '',
    component: BuscarConductoresComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarConductoresRoutingModule { }
