import { NgModule }                      from '@angular/core';
import { CommonModule }                  from '@angular/common';

import { EstadisticasRoutingModule }     from './estadisticas-routing.module';
import { SharedModule }                  from '../../shared/shared.module';
import { EstadisticasComponent }         from './estadisticas.component';

import { CardGraficaEducacionComponent } from './components/card-grafica-educacion/card-grafica-educacion.component';
import { CardGraficaEstratoComponent }   from './components/card-grafica-estrato/card-grafica-estrato.component';
import { CardGraficaModelosComponent }   from './components/card-grafica-modelos/card-grafica-modelos.component';
import { MaterialModule }                from 'src/app/material/material.module';
import { ReactiveFormsModule }           from '@angular/forms';
import { PipesModule }                   from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    EstadisticasComponent,
    CardGraficaModelosComponent,
    CardGraficaEducacionComponent,
    CardGraficaEstratoComponent
  ],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    PipesModule
  ]
})
export class EstadisticasModule { }
