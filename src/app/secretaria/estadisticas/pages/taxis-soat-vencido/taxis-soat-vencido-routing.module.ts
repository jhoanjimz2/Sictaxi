import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxisSoatVencidoComponent } from './taxis-soat-vencido.component';

const routes: Routes = [{ path: '', component: TaxisSoatVencidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxisSoatVencidoRoutingModule { }
