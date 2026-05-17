import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxistasLicenciaVencidaRoutingModule } from './taxistas-licencia-vencida-routing.module';
import { TaxistasLicenciaVencidaComponent } from './taxistas-licencia-vencida.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    TaxistasLicenciaVencidaComponent
  ],
  imports: [
    CommonModule,
    TaxistasLicenciaVencidaRoutingModule,
    SharedModule,
    PipesModule,
    MaterialModule,
  ]
})
export class TaxistasLicenciaVencidaModule { }
