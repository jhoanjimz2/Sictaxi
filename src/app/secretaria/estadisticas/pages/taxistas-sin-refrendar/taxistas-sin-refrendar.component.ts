import { Component }                                     from '@angular/core';
import { MatDialog }                                     from '@angular/material/dialog';
import { LoadingService }                                from 'src/app/services/loading.service';
import { EstadisticasService }                           from 'src/app/services/estadisticas.service';
import { DownloadService }                               from 'src/app/services/download.service';
import { RespTaxistasSinRefrendar, TaxistaSinRefrendar } from 'src/app/interfaces';
import { ModalPerfilTaxistaComponent }                   from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';


@Component({
  selector: 'app-taxistas-sin-refrendar',
  templateUrl: './taxistas-sin-refrendar.component.html',
  styleUrls: ['./taxistas-sin-refrendar.component.scss']
})
export class TaxistasSinRefrendarComponent {

  taxistas!: TaxistaSinRefrendar[];
  paginaActual: number = 0;
  totalPages: number = 0;

  constructor(
    private loading: LoadingService,
    public dialog: MatDialog,
    private eS: EstadisticasService,
    private download: DownloadService
    ) {
      this.pagina({ pagina: 1 });
    }
  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getTaxistasSinRefrendar(pagina).subscribe({
      next: (data: RespTaxistasSinRefrendar) => {
        this.totalPages = data.last_page;
        this.taxistas = data.data;
      }})
  }
  exportar() {
    this.eS.getExcelConductoresSinRefrendarExcel().subscribe({
      next: (data: any) => {
        this.download.download(data,
          this.eS._selectedEmpresa.value
          ? `Taxistas Sin Refrendar Empresa ${this.eS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
          : 'Taxistas Sin Refrendar'
        );
      }})
  }
  datosConductor(idConductor: number) {
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor, completo: true },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

}
