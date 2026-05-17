import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxisTarjetaVigenteRoutingModule } from './taxis-tarjeta-vigente-routing.module';
import { TaxisTarjetaVigenteComponent } from './taxis-tarjeta-vigente.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxisTarjetaVigenteComponent
  ],
  imports: [
    CommonModule,
    TaxisTarjetaVigenteRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class TaxisTarjetaVigenteModule { }
