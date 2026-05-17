import { Component }                                                  from '@angular/core';
import { MatDialog }                                                  from '@angular/material/dialog';
import { ConductorSearchSecretaria, RespBuscarConductoresSecretaria } from 'src/app/interfaces';
import { StringFilter }                                               from 'src/app/interfaces/filtroBusqueda';
import { ModalPerfilTaxistaComponent }                                from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { DownloadService }                                            from 'src/app/services/download.service';
import { EstadisticasService }                                        from 'src/app/services/estadisticas.service';
import { SearchCondutoresService }                                    from 'src/app/services/search-condutores.service';
import { environment }                                                from 'src/environments/environment';

@Component({
  selector: 'app-buscar-conductores',
  templateUrl: './buscar-conductores.component.html',
  styleUrls: ['./buscar-conductores.component.scss']
})
export class BuscarConductoresComponent {

  conductores: ConductorSearchSecretaria[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  placa  = '';
  cedula = '';

  get urlImg() {
    return environment.apiImg
  }

  constructor(
    public dialog: MatDialog,
    private sC: SearchCondutoresService,
    private download: DownloadService,
    public estadisticasService: EstadisticasService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    ;
    this.paginaActual = pagina;
    let params: Record<string, string | number> = {
      page: this.paginaActual,
      placa: this.placa,
      cedula: this.cedula,
      ciudad: 'SantaMarta'
    };
    // Filtrar propiedades no válidas
    params = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value != null && value !== "")
    );
    this.sC.getConductoresGeneral(params).subscribe({
      next: (data: RespBuscarConductoresSecretaria) => {
        this.totalPages = data.last_page;
        this.conductores = data.data;
      }, error: (error: any) => {
        this.totalPages = 0;
        this.conductores = [];
      }
    })
  }
  datosConductor(idConductor: string) {
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor, completo: true },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  buscar(busca: string) {
    if (StringFilter.esNumerica(busca)) {
      this.cedula = busca;
      this.placa  = '';
      this.pagina({ pagina: 1 });
    } else if (StringFilter.esAlfanumerica(busca)) {
      this.cedula = '';
      this.placa  = busca;
      this.pagina({ pagina: 1 });
    } else {
      this.cedula = '';
      this.placa  = '';
      this.pagina({ pagina: 1 });
    }
  }
  exportar() {
    ;
    this.sC.getExcelConductoresListadoGeneral().subscribe({
      next: (data: any) => {
        this.download.download(data, `Conductores`);
      }})
  }
}
