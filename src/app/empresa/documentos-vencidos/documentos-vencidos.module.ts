import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosVencidosRoutingModule } from './documentos-vencidos-routing.module';
import { DocumentosVencidosComponent } from './documentos-vencidos.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardVehiculoComponent } from './components/card-vehiculo/card-vehiculo.component';
import { CardConductorComponent } from './components/card-conductor/card-conductor.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    DocumentosVencidosComponent,
    CardVehiculoComponent,
    CardConductorComponent
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
