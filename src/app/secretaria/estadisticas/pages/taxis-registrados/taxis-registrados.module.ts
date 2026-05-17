import { NgModule }                      from '@angular/core';
import { CommonModule }                  from '@angular/common';

import { TaxisRegistradosRoutingModule } from './taxis-registrados-routing.module';
import { TaxisRegistradosComponent }     from './taxis-registrados.component';
import { SharedModule }                  from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    TaxisRegistradosComponent
  ],
  imports: [
    CommonModule,
    TaxisRegistradosRoutingModule,
    SharedModule
  ]
})
export class TaxisRegistradosModule { }
