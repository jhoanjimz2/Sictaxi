import { CUSTOM_ELEMENTS_SCHEMA, NgModule }   from '@angular/core';
import { CommonModule }                       from '@angular/common';
import { SidebarComponent }                   from './sidebar/sidebar.component';
import { RouterModule }                       from '@angular/router';
import { CardSimpleComponent }                from './card-simple/card-simple.component';
import { PaginacionComponent }                from './paginacion/paginacion.component';
import { MaterialModule }                     from '../material/material.module';
import { LoadingComponent }                   from './loading/loading.component';
import { ExportExcelComponent }               from './export-excel/export-excel.component';
import { PipesModule }                        from '../pipes/pipes.module';
import { BarraBusquedaComponent }             from './barra-busqueda/barra-busqueda.component';
import { ReactiveFormsModule }                from '@angular/forms';
import { DatetimeComponent }                  from './datetime/datetime.component';
import { EditAddDeleteComponent }             from './edit-add-delete/edit-add-delete.component';
import { SelectNegComponent }                 from './select-neg/select-neg.component';
import { SelectPosComponent }                 from './select-pos/select-pos.component';
import { BarHoySemanaMesComponent }           from './bar-hoy-semana-mes/bar-hoy-semana-mes.component';
import { ListTaxistasComponent }              from './list-taxistas/list-taxistas.component';
import { CardReporteCalificacionesComponent } from './card-reporte-calificaciones/card-reporte-calificaciones.component';
import { CardGraficaCalificacionesComponent } from './card-grafica-calificaciones/card-grafica-calificaciones.component';
import { CardGraficaComentariosNegComponent } from './card-grafica-comentarios-neg/card-grafica-comentarios-neg.component';
import { CardGraficaComentariosPosComponent } from './card-grafica-comentarios-pos/card-grafica-comentarios-pos.component';
import { OpcionesGraficaComponent }           from './opciones-grafica/opciones-grafica.component';
import { DiasMesesAnhosComponent }            from './dias-meses-anhos/dias-meses-anhos.component';
import { CardMetricasComponent }              from './card-metricas/card-metricas.component';
import { MatIconModule }                      from '@angular/material/icon';
import { FiltroComponent }                    from './filtro/filtro.component';
import { CountdownFooterComponent }           from './countdown-footer/countdown-footer.component';
import { DummyComponent } from './dummy/dummy.component';



@NgModule({
  declarations: [
    SidebarComponent,
    CardSimpleComponent,
    PaginacionComponent,
    LoadingComponent,
    ExportExcelComponent,
    BarraBusquedaComponent,
    DatetimeComponent,
    EditAddDeleteComponent,
    SelectNegComponent,
    SelectPosComponent,
    BarHoySemanaMesComponent,
    ListTaxistasComponent,
    CardReporteCalificacionesComponent,
    CardGraficaComentariosPosComponent,
    CardGraficaComentariosNegComponent,
    CardGraficaCalificacionesComponent,
    OpcionesGraficaComponent,
    DiasMesesAnhosComponent,
    CardMetricasComponent,
    FiltroComponent,
    CountdownFooterComponent,
    DummyComponent
  ],
  exports: [
    SidebarComponent,
    CardSimpleComponent,
    PaginacionComponent,
    LoadingComponent,
    ExportExcelComponent,
    BarraBusquedaComponent,
    DatetimeComponent,
    EditAddDeleteComponent,
    SelectNegComponent,
    SelectPosComponent,
    BarHoySemanaMesComponent,
    ListTaxistasComponent,
    CardReporteCalificacionesComponent,
    CardGraficaComentariosPosComponent,
    CardGraficaComentariosNegComponent,
    CardGraficaCalificacionesComponent,
    CardMetricasComponent,
    FiltroComponent,
    CountdownFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PipesModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
