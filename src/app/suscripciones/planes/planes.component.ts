import { Component, OnDestroy } from '@angular/core';
// import { SuscripcionesService } from 'src/app/services/suscripciones.service';
import { Plan }                 from 'src/app/interfaces/plan.interface';
import { PerfilEmpresaService } from 'src/app/services/perfil-empresa.service';
import { Subscription }         from 'rxjs';
import { RespGetPerfilEmpresa } from 'src/app/interfaces';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnDestroy {

  private subscription!: Subscription;
  private empresa: RespGetPerfilEmpresa = {} as RespGetPerfilEmpresa;

  isAnnual = false;
  selectedPlan!: Plan;
  plans:Plan[] = [];

  constructor(
    // private suscripcionesServices: SuscripcionesService,
    private perfilEmpresaService: PerfilEmpresaService,
  ) {
    this.loadPlans();
    this.subscription = this.perfilEmpresaService.obtenerProfileEmpresa().subscribe({
      next: (data) => {
        this.empresa = data;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onPlanSelected(plan: Plan): void {
    this.selectedPlan = plan;
  }

  onPaymentSubmitted(paymentData: Plan): void {
    // this.suscripcionesServices.iniciarPago({
    //   name: paymentData.name.replace(/["\\]/g, ''),
    //   price: paymentData.isAnnual ? paymentData.annual_price : paymentData.monthly_price,
    //   // price: 2000,
    //   frequency: paymentData.isAnnual ? 12 : 1,
    //   payer_email: this.empresa.email
    // }).subscribe({ next:(data: any) => {
    //   this.suscripcionesServices.suscripcion({
    //     plan_uuid: paymentData.uuid,
    //     type: paymentData.isAnnual ? 'ANNUAL' : 'MONTHLY',
    //     transaction_id: data.data.transaction_id
    //   }).subscribe({
    //     next:() => {
    //       window.location.href = data.data.init_point;
    //     }
    //   })
    // }})
  }

  loadPlans() {
    // this.suscripcionesServices.getPlanes().subscribe({
    //   next: (response: any) => {
    //     this.plans = response.data.map((plan: any) => ({
    //       ...plan,
    //       descriptionArray: JSON.parse(plan.description.replace(/\u00ed/g, 'í').replace(/\u00fa/g, 'ú'))
    //     }));
    //   }
    // });
  }

}
