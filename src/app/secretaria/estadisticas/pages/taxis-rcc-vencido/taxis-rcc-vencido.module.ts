import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { TaxisRccVencidoRoutingModule } from './taxis-rcc-vencido-routing.module';
import { TaxisRccVencidoComponent }     from './taxis-rcc-vencido.component';
import { SharedModule }                 from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxisRccVencidoComponent
  ],
  imports: [
    CommonModule,
    TaxisRccVencidoRoutingModule,
    SharedModule
  ]
})
export class TaxisRccVencidoModule { }
