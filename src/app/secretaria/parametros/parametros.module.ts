import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ParametrosComponent } from './parametros.component';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../pipes/pipes.module';
import { MaterialModule } from '../../material/material.module';
import { InputsParametrosComponent } from './components/inputs-parametros/inputs-parametros.component';
import { SelectsParametrosComponent } from './components/selects-parametros/selects-parametros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParametrosComponent,
    InputsParametrosComponent,
    SelectsParametrosComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    SharedModule,
    PipesModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ParametrosModule { }
