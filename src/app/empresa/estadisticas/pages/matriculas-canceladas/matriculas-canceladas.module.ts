import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculasCanceladasRoutingModule } from './matriculas-canceladas-routing.module';
import { MatriculasCanceladasComponent } from './matriculas-canceladas.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';


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
