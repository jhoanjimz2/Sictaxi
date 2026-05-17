import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxisTarjetaVencidaRoutingModule } from './taxis-tarjeta-vencida-routing.module';
import { TaxisTarjetaVencidaComponent } from './taxis-tarjeta-vencida.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxisTarjetaVencidaComponent
  ],
  imports: [
    CommonModule,
    TaxisTarjetaVencidaRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class TaxisTarjetaVencidaModule { }
