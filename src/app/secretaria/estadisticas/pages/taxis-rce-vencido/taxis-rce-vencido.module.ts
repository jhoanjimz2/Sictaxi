import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { TaxisRceVencidoRoutingModule } from './taxis-rce-vencido-routing.module';
import { TaxisRceVencidoComponent }     from './taxis-rce-vencido.component';
import { SharedModule }                 from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxisRceVencidoComponent
  ],
  imports: [
    CommonModule,
    TaxisRceVencidoRoutingModule,
    SharedModule
  ]
})
export class TaxisRceVencidoModule { }
