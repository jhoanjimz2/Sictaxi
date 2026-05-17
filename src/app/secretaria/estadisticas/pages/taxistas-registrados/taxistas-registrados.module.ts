import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxistasRegistradosRoutingModule } from './taxistas-registrados-routing.module';
import { TaxistasRegistradosComponent } from './taxistas-registrados.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from '../../../../pipes/pipes.module';
import { MaterialModule } from '../../../../material/material.module';


@NgModule({
  declarations: [
    TaxistasRegistradosComponent
  ],
  imports: [
    CommonModule,
    TaxistasRegistradosRoutingModule,
    SharedModule,
    PipesModule,
    MaterialModule
  ]
})
export class TaxistasRegistradosModule { }
