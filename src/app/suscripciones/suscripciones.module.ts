import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { SuscripcionesRoutingModule } from './suscripciones-routing.module';
import { IndexComponent }             from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SuscripcionesRoutingModule
  ]
})
export class SuscripcionesModule { }
