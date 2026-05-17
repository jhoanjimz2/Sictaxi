import { Component }                    from '@angular/core';
import { StringFilter }                 from 'src/app/interfaces/filtroBusqueda';
import { GetParqueAutomotor, Vehiculo } from 'src/app/interfaces/parque-automotor';
import { DownloadService }              from 'src/app/services/download.service';
import { EstadisticasService }          from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-parque-automotor',
  templateUrl: './parque-automotor.component.html',
  styleUrls: ['./parque-automotor.component.scss']
})
export class ParqueAutomotorComponent {

  vahiculos: Vehiculo[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  placa     = '';
  cedula    = '';

  constructor(
    private eS: EstadisticasService,
    private download: DownloadService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    let params: Record<string, string | number> = {
      placa: this.placa,
      cedula: this.cedula,
      page: this.paginaActual
    };
    params = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value != null && value !== "")
    );
    this.eS.getVehiculosGeneral(params).subscribe({
      next: (data: GetParqueAutomotor) => {
        this.totalPages = data.last_page;
        this.vahiculos = data.data;
        ;
      }, error: (error: any) => {
        this.totalPages = 0;
        this.vahiculos = [];
      }
    })
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
    this.eS.getParqueAutomotorExcel().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Parque Automotor');
      }})
  }
}
