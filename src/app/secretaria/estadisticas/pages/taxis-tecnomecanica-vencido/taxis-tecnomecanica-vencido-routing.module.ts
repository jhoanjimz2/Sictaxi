import { NgModule }                           from '@angular/core';
import { RouterModule, Routes }               from '@angular/router';
import { TaxisTecnomecanicaVencidoComponent } from './taxis-tecnomecanica-vencido.component';

const routes: Routes = [{ path: '', component: TaxisTecnomecanicaVencidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxisTecnomecanicaVencidoRoutingModule { }
