import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProximosVencerseRoutingModule } from './proximos-vencerse-routing.module';
import { ProximosVencerseComponent } from './proximos-vencerse.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    ProximosVencerseComponent
  ],
  imports: [
    CommonModule,
    ProximosVencerseRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class ProximosVencerseModule { }
