import { Component, inject }         from '@angular/core';
import { CardsEmpresa }              from 'src/app/interfaces';
import { DocumentosVencidosService } from 'src/app/services/documentos-vencidos.service';
import { EstadisticasService }       from 'src/app/services/estadisticas.service';
import { ModalsService }             from 'src/app/services/modals.service';
// import { SuscripcionesService }      from 'src/app/services/suscripciones.service';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent  {

  private eS                 = inject(EstadisticasService)
  private DVS                = inject(DocumentosVencidosService);
  // private suscriptionService = inject(SuscripcionesService);
  private modals             = inject(ModalsService);

  totalDocumentosVencidos: number = 0;
  dataCards: CardsEmpresa = {} as CardsEmpresa;
  constructor() {
    this.eS.getCardsEmpresas().subscribe({next: (data: CardsEmpresa) => {
      this.dataCards = data;
    }})
    this.DVS.obtenerTotalDocumentosVencidos().subscribe(total => {
      this.totalDocumentosVencidos = total;
    });
    // this.suscriptionService.getMyPlan().subscribe({
    //   next: (response: any) => {
    //     if (response?.data?.status === 'ACTIVE') {
    //       localStorage.setItem('suscription', this.suscriptionService.encryptData({suscription: true}));
    //     }
    //   }, error: (error:any) => this.modals.modalsSuscripcion()

    // });
  }

}
