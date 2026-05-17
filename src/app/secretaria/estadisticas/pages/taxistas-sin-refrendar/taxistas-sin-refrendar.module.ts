import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxistasSinRefrendarRoutingModule } from './taxistas-sin-refrendar-routing.module';
import { TaxistasSinRefrendarComponent } from './taxistas-sin-refrendar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxistasSinRefrendarComponent
  ],
  imports: [
    CommonModule,
    TaxistasSinRefrendarRoutingModule,
    SharedModule,
    PipesModule,
    MaterialModule
  ]
})
export class TaxistasSinRefrendarModule { }
