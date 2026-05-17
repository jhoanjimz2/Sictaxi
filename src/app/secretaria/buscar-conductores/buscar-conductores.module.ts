import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarConductoresRoutingModule } from './buscar-conductores-routing.module';
import { BuscarConductoresComponent } from './buscar-conductores.component';
import { PipesModule } from '../../pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    BuscarConductoresComponent
  ],
  imports: [
    CommonModule,
    BuscarConductoresRoutingModule,
    PipesModule,
    SharedModule,
    MaterialModule
  ]
})
export class BuscarConductoresModule { }
