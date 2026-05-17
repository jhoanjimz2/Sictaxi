import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { ImagenesPipe }              from './imagenes.pipe';
import { TaxistasEasyPipe }          from './taxistas-easy.pipe';
import { OrderDatePipe }             from './order-date.pipe';
import { FechasVencidasPipe }        from './fechas-vencidas.pipe';
import { FechasVencidasEmpresaPipe } from './fechas-vencidas-empresa.pipe';
import { NombreEntidadPipe }         from './nombre-entidad.pipe';



@NgModule({
  declarations: [
    ImagenesPipe,
    TaxistasEasyPipe,
    OrderDatePipe,
    FechasVencidasPipe,
    FechasVencidasEmpresaPipe,
    NombreEntidadPipe
  ],
  exports: [
    ImagenesPipe,
    TaxistasEasyPipe,
    OrderDatePipe,
    FechasVencidasPipe,
    FechasVencidasEmpresaPipe,
    NombreEntidadPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
