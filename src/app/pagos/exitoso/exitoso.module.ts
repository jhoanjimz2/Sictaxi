import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExitosoRoutingModule } from './exitoso-routing.module';
import { ExitosoComponent } from './exitoso.component';


@NgModule({
  declarations: [
    ExitosoComponent
  ],
  imports: [
    CommonModule,
    ExitosoRoutingModule
  ]
})
export class ExitosoModule { }
