import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuejasRoutingModule } from './quejas-routing.module';
import { QuejasComponent } from './quejas.component';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../pipes/pipes.module';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    QuejasComponent
  ],
  imports: [
    CommonModule,
    QuejasRoutingModule,
    SharedModule,
    PipesModule,
    MaterialModule
  ]
})
export class QuejasModule { }
