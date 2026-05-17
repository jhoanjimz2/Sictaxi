import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plan }                                   from 'src/app/interfaces/plan.interface';
import Swal                                       from 'sweetalert2';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss']
})
export class PlanSelectionComponent {
  @Input() plans: (Plan & { descriptionArray?: string[] })[] = [];
  @Input() isAnnual: boolean = false;
  @Output() paymentSubmitted = new EventEmitter<any>();


  selectPlan(plan: Plan): void {
    if (!plan.can_apply) {
      Swal.fire({
        title: 'Límite Excedido',
        text: `Has excedido los límites de este plan y no puedes adquirirlo.
               Considera un plan superior que se adapte a tus necesidades.`,
        icon: 'error',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#e74c3c',
        customClass: {
          popup: 'custom-swal-popup',
          confirmButton: 'custom-confirm-btn'
        }
      });
      return;
    }

    const price = this.isAnnual ? plan.annual_price : plan.monthly_price;
    const period = this.isAnnual ? 'Anual' : 'Mensual';
    const formattedPrice = price === 0 ? 'FREE' : price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });


    Swal.fire({
      title: `Activar su suscripción en el plan ${plan.name}`,
      html: `
        <div class="text-left">
          <p class="font-semibold text-gray-800 mb-2">Incluye:</p>
          <ul class="list-disc ml-5 text-gray-700">
            ${plan.descriptionArray?.map(item => `<li>${item}</li>`).join('') || ''}
          </ul>
          <p class="mt-4 text-gray-900 font-bold text-lg">
            Precio: <span class="text-blue-600">${formattedPrice}</span> / ${period}
          </p>
        </div>
      `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#8DD7F7',
      cancelButtonColor: '#e74c3c',
      didOpen: () => {
        // Aplicar estilos al contenedor principal del SweetAlert
        const popup = document.querySelector('.swal2-popup') as HTMLElement;
        if (popup) {
          popup.style.border = '2px solid transparent';
          popup.style.backgroundImage =
            'linear-gradient(white, white), linear-gradient(to right, #3b82f6, #9333ea)';
          popup.style.backgroundOrigin = 'border-box';
          popup.style.backgroundClip = 'content-box, border-box';
          popup.style.borderRadius = '12px';
          popup.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
        }

        // Aplicar estilos al botón de confirmación
        const confirmBtn = document.querySelector('.swal2-confirm') as HTMLElement;
        if (confirmBtn) {
          confirmBtn.style.background = 'linear-gradient(to right, #3b82f6, #9333ea)';
          confirmBtn.style.color = 'white';
          confirmBtn.style.fontWeight = '600';
          confirmBtn.style.borderRadius = '8px';
          confirmBtn.style.padding = '10px 20px';
          confirmBtn.style.transition = 'all 0.3s ease-in-out';
        }

        // Aplicar estilos al botón de cancelar
        const cancelBtn = document.querySelector('.swal2-cancel') as HTMLElement;
        if (cancelBtn) {
          cancelBtn.style.background = '#e74c3c';
          cancelBtn.style.color = 'white';
          cancelBtn.style.fontWeight = '600';
          cancelBtn.style.borderRadius = '8px';
          cancelBtn.style.padding = '10px 20px';
          cancelBtn.style.transition = 'all 0.3s ease-in-out';
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.paymentSubmitted.emit({ ...plan, isAnnual: this.isAnnual });
      }
    });
  }


}
