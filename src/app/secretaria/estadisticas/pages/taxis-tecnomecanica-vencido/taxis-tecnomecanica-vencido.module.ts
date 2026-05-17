import { NgModule }                               from '@angular/core';
import { CommonModule }                           from '@angular/common';

import { TaxisTecnomecanicaVencidoRoutingModule } from './taxis-tecnomecanica-vencido-routing.module';
import { TaxisTecnomecanicaVencidoComponent }     from './taxis-tecnomecanica-vencido.component';
import { SharedModule }                           from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxisTecnomecanicaVencidoComponent
  ],
  imports: [
    CommonModule,
    TaxisTecnomecanicaVencidoRoutingModule,
    SharedModule
  ]
})
export class TaxisTecnomecanicaVencidoModule { }
