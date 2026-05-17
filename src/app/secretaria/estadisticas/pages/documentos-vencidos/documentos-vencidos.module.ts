import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosVencidosRoutingModule } from './documentos-vencidos-routing.module';
import { DocumentosVencidosComponent } from './documentos-vencidos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material/material.module';
import { CardConductorComponent } from './card-conductor/card-conductor.component';
import { CardVehiculoComponent } from './card-vehiculo/card-vehiculo.component';


@NgModule({
  declarations: [
    DocumentosVencidosComponent,
    CardConductorComponent,
    CardVehiculoComponent
  ],
  imports: [
    CommonModule,
    DocumentosVencidosRoutingModule,
    SharedModule,
    PipesModule,
    MatIconModule,
    MaterialModule
  ]
})
export class DocumentosVencidosModule { }
