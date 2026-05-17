import { NgModule }                      from '@angular/core';
import { CommonModule }                  from '@angular/common';

import { TaxisSoatVencidoRoutingModule } from './taxis-soat-vencido-routing.module';
import { TaxisSoatVencidoComponent }     from './taxis-soat-vencido.component';
import { SharedModule }                  from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxisSoatVencidoComponent
  ],
  imports: [
    CommonModule,
    TaxisSoatVencidoRoutingModule,
    SharedModule,
  ]
})
export class TaxisSoatVencidoModule { }
