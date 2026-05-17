import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarConductoresRoutingModule } from './buscar-conductores-routing.module';
import { BuscarConductoresComponent } from './buscar-conductores.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


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
