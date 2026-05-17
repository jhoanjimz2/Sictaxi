import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { TaxisRceVencidoComponent } from './taxis-rce-vencido.component';

const routes: Routes = [{ path: '', component: TaxisRceVencidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxisRceVencidoRoutingModule { }
