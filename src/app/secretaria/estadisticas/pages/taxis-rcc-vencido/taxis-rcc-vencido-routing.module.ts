import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { TaxisRccVencidoComponent } from './taxis-rcc-vencido.component';

const routes: Routes = [{ path: '', component: TaxisRccVencidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxisRccVencidoRoutingModule { }
