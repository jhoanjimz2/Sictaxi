import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasAutorizadasRoutingModule } from './empresas-autorizadas-routing.module';
import { EmpresasAutorizadasComponent } from './empresas-autorizadas.component';
import { PipesModule } from '../../../../pipes/pipes.module';
import { MaterialModule } from '../../../../material/material.module';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    EmpresasAutorizadasComponent
  ],
  imports: [
    CommonModule,
    EmpresasAutorizadasRoutingModule,
    PipesModule,
    SharedModule,
    MaterialModule
  ]
})
export class EmpresasAutorizadasModule { }
