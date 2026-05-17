import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxisTarjetaVencidaComponent } from './taxis-tarjeta-vencida.component';

const routes: Routes = [{ path: '', component: TaxisTarjetaVencidaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxisTarjetaVencidaRoutingModule { }
