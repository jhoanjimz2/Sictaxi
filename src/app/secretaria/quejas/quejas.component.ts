import { Component }                                                               from '@angular/core';
import { MatDialog }                                                               from '@angular/material/dialog';
import { ModalQuejasTramitadasComponent }                                          from 'src/app/modals/modal-quejas-tramitadas/modal-quejas-tramitadas.component';
import { ModalBloquearConductorComponent }                                         from '../../modals/modal-bloquear-conductor/modal-bloquear-conductor.component';
import { ModalPerfilTaxistaComponent }                                             from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { ConductoresConQuejas, ReqConductoresConQuejas, RespConductoresConQuejas } from 'src/app/interfaces';
import { EstadisticasService }                                                     from 'src/app/services/estadisticas.service';
import * as moment                                                                 from 'moment';
import { subWeeks }                                                                from 'date-fns';
import { ModalDesbloquearConductorComponent }                                      from 'src/app/modals/modal-desbloquear-conductor/modal-desbloquear-conductor.component';
import { DownloadService }                                                         from 'src/app/services/download.service';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent {

  conductoresConQuejas: ConductoresConQuejas[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  fechaFinal = moment(new Date()).format("YYYY-MM-DD");
  fechaInicial = moment(subWeeks(new Date(), 1)).format("YYYY-MM-DD");
  comentarios: string[] = [];
  filtro!: string;

  constructor(
    public dialog: MatDialog,
    private eS: EstadisticasService,
    private download: DownloadService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    let comentarios = undefined;
    if (this.comentarios.length) comentarios = this.comentarios;
    let data:ReqConductoresConQuejas = {
      fechaInicial: this.fechaInicial,
      fechaFinal: this.fechaFinal,
      comentarios,
      filtro: this.filtro
    };
    this.eS.getConductoresConQuejasPaginado(pagina, data).subscribe({
      next: (data: RespConductoresConQuejas) => {
        this.totalPages = data.pages;
        this.conductoresConQuejas = data.data;
      }, error: (error: any) => {
        this.totalPages = 0;
        this.conductoresConQuejas = [];
      }
    })
  }
  selectDate({start, end}: any) {
    this.fechaFinal = moment(end).format("YYYY-MM-DD");
    this.fechaInicial = moment(start).format("YYYY-MM-DD");
    this.pagina({ pagina: 1 });
  }
  selectComent(event: string[]) {
    this.comentarios = event;
    this.pagina({ pagina: 1 });
  }
  quejasTramitadas(idVinculacion: number) {
    const dialogRef = this.dialog.open(ModalQuejasTramitadasComponent, {
      data: {
        idVinculacion: idVinculacion,
        fechaInicial: this.fechaInicial,
        fechaFinal: this.fechaFinal,
      },
      height: '450px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  bloquear(conductor: ConductoresConQuejas) {
    const dialogRef = this.dialog.open(ModalBloquearConductorComponent, {
      data: { conductor }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  desbloquear(conductor: ConductoresConQuejas) {
    const dialogRef = this.dialog.open(ModalDesbloquearConductorComponent, {
      data: { conductor }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  datosConductor(idConductor: number) {
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor, completo: true },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  buscar(busca: string) {
    this.filtro = busca;
    this.pagina({ pagina: 1 });
  }
  exportar() {
    this.eS.exportConductoresConQuejasExcel({
      fechaFinal: this.fechaFinal,
      fechaInicial: this.fechaInicial,
      placa: this.filtro
    }).subscribe({
      next: (data: any) => {
        this.download.download(data, 'Conductores con quejas');
      }})
  }
}
