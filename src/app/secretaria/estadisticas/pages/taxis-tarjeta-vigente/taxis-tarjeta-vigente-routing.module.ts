import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxisTarjetaVigenteComponent } from './taxis-tarjeta-vigente.component';

const routes: Routes = [{ path: '', component: TaxisTarjetaVigenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxisTarjetaVigenteRoutingModule { }
