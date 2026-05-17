import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueAutomotorRoutingModule } from './parque-automotor-routing.module';
import { ParqueAutomotorComponent } from './parque-automotor.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


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
