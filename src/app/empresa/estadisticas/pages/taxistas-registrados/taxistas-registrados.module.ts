import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxistasRegistradosRoutingModule } from './taxistas-registrados-routing.module';
import { TaxistasRegistradosComponent } from './taxistas-registrados.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    TaxistasRegistradosComponent
  ],
  imports: [
    CommonModule,
    TaxistasRegistradosRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class TaxistasRegistradosModule { }
