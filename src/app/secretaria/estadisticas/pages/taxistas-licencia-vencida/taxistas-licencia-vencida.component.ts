import { Component }                                   from '@angular/core';
import { MatDialog }                                   from '@angular/material/dialog';
import { ModalPerfilTaxistaComponent }                 from '../../../../modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { RespTaxistasSinLicencia, TaxistaSinLicencia } from 'src/app/interfaces';
import { EstadisticasService }                         from 'src/app/services/estadisticas.service';
import { DownloadService }                             from 'src/app/services/download.service';


@Component({
  selector: 'app-taxistas-licencia-vencida',
  templateUrl: './taxistas-licencia-vencida.component.html',
  styleUrls: ['./taxistas-licencia-vencida.component.scss']
})
export class TaxistasLicenciaVencidaComponent {

  taxistas!: TaxistaSinLicencia[];
  totalPages: number = 0;
  paginaActual: number = 0;

  constructor(
    public dialog: MatDialog,
    private eS: EstadisticasService,
    private download: DownloadService
  ) {
    this.pagina({ pagina: 1 });
  }
  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getTaxistasSinLicencia(pagina).subscribe({
      next: (data: RespTaxistasSinLicencia) => {
        this.totalPages = data.last_page;
        this.taxistas = data.data;
      }})
  }
  exportar() {
    this.eS.getExcelConductoresSinLicenciaExcel().subscribe({
      next: (data: any) => {
        this.download.download(data,
          this.eS._selectedEmpresa.value
          ? `Taxistas Sin Licencia Empresa ${this.eS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
          : 'Taxistas Sin Licencia'
        );
      }})
  }
  datosConductor(idConductor: number) {
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }



}
