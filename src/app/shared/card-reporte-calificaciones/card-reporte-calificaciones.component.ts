import { Component } from '@angular/core';
import * as moment from 'moment';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { ConductorConCalificacion, ReqEstadisticaConductores, Usuario } from 'src/app/interfaces';
import { subWeeks } from 'date-fns';
import { MatDialog } from '@angular/material/dialog';
import { ModalExcelCalificacionesComponent } from 'src/app/modals/modal-excel-calificaciones/modal-excel-calificaciones.component';

@Component({
  selector: 'app-card-reporte-calificaciones',
  templateUrl: './card-reporte-calificaciones.component.html',
  styleUrls: ['./card-reporte-calificaciones.component.scss']
})
export class CardReporteCalificacionesComponent {

  get user(): Usuario { return JSON.parse(localStorage.getItem('user')!); }

  buscar: string = '';

  cargandoN: boolean = false;
  taxistasN: ConductorConCalificacion[] = [];
  fechaFinalN = moment(new Date()).format("YYYY-MM-DD");
  fechaInicialN = moment(new Date(subWeeks(new Date(), 1))).format("YYYY-MM-DD");
  comentariosN: string[] = [];
  selectComentN(event: string[]) {
    this.comentariosN = event;
    this.cargarTaxistasQuejas();
  }

  cargandoP: boolean = false;
  taxistasP: ConductorConCalificacion[] = [];
  fechaFinalP = moment(new Date()).format("YYYY-MM-DD");
  fechaInicialP = moment(new Date(subWeeks(new Date(), 1))).format("YYYY-MM-DD");
  comentariosP: string[] = [];
  selectComentP(event: string[]) {
    this.comentariosP = event;
    this.cargarTaxistasBuenas();
  }

  constructor(
    private eS: EstadisticasService,
    private dialog: MatDialog
  ) {
    this.cargarTaxistasBuenas();
    this.cargarTaxistasQuejas();
  }

  cargarTaxistasBuenas() {
    this.cargandoP = true;
    let comentarios = undefined;
    if ( this.comentariosP.length ) comentarios = this.comentariosP;
    let data: ReqEstadisticaConductores = {
      fechaFinal: this.fechaFinalP,
      fechaInicial: this.fechaInicialP,
      comentarios
    }
    this.eS.getConductoresBienCalificados(data).subscribe({
      next: (data: ConductorConCalificacion[]) => {
        this.taxistasP = data;
        this.cargandoP = false;
      }, error: () => {
        this.cargandoP = false;
        this.taxistasP = [];
      }
    })
  }
  cargarTaxistasQuejas() {
    this.cargandoN = true;
    let comentarios = undefined;
    if ( this.comentariosN.length ) comentarios = this.comentariosN;
    let data: ReqEstadisticaConductores = {
      fechaFinal: this.fechaFinalN,
      fechaInicial: this.fechaInicialN,
      comentarios
    }
    this.eS.getConductoresConQuejas(data).subscribe({
      next: (data: ConductorConCalificacion[]) => {
        this.taxistasN = data;
        this.cargandoN = false;
      }, error: () => {
        this.cargandoN = false;
        this.taxistasN = [];
      }
    })
  }
  selectDateP({start, end}: any) {
    this.fechaFinalP = moment(end).format("YYYY-MM-DD");
    this.fechaInicialP = moment(start).format("YYYY-MM-DD");
    this.cargarTaxistasBuenas();
  }
  selectDateN({start, end}: any) {
    this.fechaFinalN = moment(end).format("YYYY-MM-DD");
    this.fechaInicialN = moment(start).format("YYYY-MM-DD");
    this.cargarTaxistasQuejas();
  }
  buscando(event: any) {
    this.buscar = event;
  }

  export() {
    const dialogRef = this.dialog.open(ModalExcelCalificacionesComponent, {
      data: {
        pos: { fechaInicial: this.fechaInicialP, fechaFinal: this.fechaFinalP, comentarios: this.comentariosP },
        neg: { fechaInicial: this.fechaInicialN, fechaFinal: this.fechaFinalN, comentarios: this.comentariosN },
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

}

