import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociacionesRoutingModule } from './asociaciones-routing.module';
import { AsociacionesComponent } from './asociaciones.component';
import { PipesModule } from '../../../../pipes/pipes.module';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../material/material.module';


@NgModule({
  declarations: [
    AsociacionesComponent
  ],
  imports: [
    CommonModule,
    AsociacionesRoutingModule,
    PipesModule,
    SharedModule,
    MaterialModule
  ]
})
export class AsociacionesModule { }
