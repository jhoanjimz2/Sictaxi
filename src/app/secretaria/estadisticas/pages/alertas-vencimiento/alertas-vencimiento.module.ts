import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertasVencimientoRoutingModule } from './alertas-vencimiento-routing.module';
import { AlertasVencimientoComponent } from './alertas-vencimiento.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PipesModule } from '../../../../pipes/pipes.module';


@NgModule({
  declarations: [
    AlertasVencimientoComponent
  ],
  imports: [
    CommonModule,
    AlertasVencimientoRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class AlertasVencimientoModule { }
