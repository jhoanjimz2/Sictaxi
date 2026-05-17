import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilEmpresaRoutingModule } from './perfil-empresa-routing.module';
import { PerfilEmpresaComponent } from './perfil-empresa.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    PerfilEmpresaComponent
  ],
  imports: [
    CommonModule,
    PerfilEmpresaRoutingModule,
    PipesModule,
    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class PerfilEmpresaModule { }
