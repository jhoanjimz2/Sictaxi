import { Component }                                      from '@angular/core';
import { MatDialog }                                      from '@angular/material/dialog';
import { RespTaxistasRegistrados, TaxistaRegistrado }     from 'src/app/interfaces';
import { ModalPerfilTaxistaComponent }                    from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { DownloadService }                                from 'src/app/services/download.service';
import { EstadisticasService }                            from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-taxistas-registrados',
  templateUrl: './taxistas-registrados.component.html',
  styleUrls: ['./taxistas-registrados.component.scss']
})
export class TaxistasRegistradosComponent {

  taxistas!: TaxistaRegistrado[];
  totalPages: number = 0;
  paginaActual: number = 0;

  constructor(
    public dialog: MatDialog,
    private download: DownloadService,
    private eS: EstadisticasService
    ) {
      this.pagina({ pagina: 1 });
    }
  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getTaxistasRegistrados(pagina).subscribe({
      next: (data: RespTaxistasRegistrados) => {
        this.totalPages = data.last_page;
        this.taxistas = data.data;
      }})
  }
  exportar() {
    this.eS.getExcelConductoresRegistradosExcel().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Taxistas Registrados');
      }})
  }
  datosConductor(idConductor: number) {
    console.log(idConductor)
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }


}
