import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculasCanceladasRoutingModule } from './matriculas-canceladas-routing.module';
import { MatriculasCanceladasComponent } from './matriculas-canceladas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from '../../../../pipes/pipes.module';


@NgModule({
  declarations: [
    MatriculasCanceladasComponent
  ],
  imports: [
    CommonModule,
    MatriculasCanceladasRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class MatriculasCanceladasModule { }
