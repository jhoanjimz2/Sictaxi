import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesvinculacionesRoutingModule } from './desvinculaciones-routing.module';
import { DesvinculacionesComponent } from './desvinculaciones.component';
import { CardDesvinculcionComponent } from './card-desvinculcion/card-desvinculcion.component';
import { SharedModule } from "../../shared/shared.module";
import { PipesModule } from "../../pipes/pipes.module";


@NgModule({
  declarations: [
    DesvinculacionesComponent,
    CardDesvinculcionComponent
  ],
  imports: [
    CommonModule,
    DesvinculacionesRoutingModule,
    SharedModule,
    PipesModule
]
})
export class DesvinculacionesModule { }
