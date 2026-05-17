import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueAutomotorRoutingModule } from './parque-automotor-routing.module';
import { ParqueAutomotorComponent } from './parque-automotor.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    ParqueAutomotorComponent
  ],
  imports: [
    CommonModule,
    ParqueAutomotorRoutingModule,
    SharedModule,
    MaterialModule,
    PipesModule
  ]
})
export class ParqueAutomotorModule { }
