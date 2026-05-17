import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalActualizarDocumentosConductorComponent } from 'src/app/modals/modal-actualizar-documentos-conductor/modal-actualizar-documentos-conductor.component';
import { ModalDesvinculacionMultipleComponent } from 'src/app/modals/modal-desvinculacion-multiple/modal-desvinculacion-multiple.component';

@Component({
  selector: 'app-card-conductor',
  templateUrl: './card-conductor.component.html',
  styleUrls: ['./card-conductor.component.scss']
})
export class CardConductorComponent {
  @Input() conductores: any[] = [];
  @Input() page: number = 1;
  private dialog = inject(MatDialog);

  openModalActualizar(conductor: any) {
    this.dialog.open(ModalActualizarDocumentosConductorComponent, {
      closeOnNavigation: false,
      disableClose: true,
      autoFocus: false,
      data: {
        conductor_id: conductor.conductor_id,
        fechaLicenciaConduccion: conductor.fechaLicenciaConduccion,
        fechaExpedicionLicenciaConduccion: conductor.fechaExpedicionLicenciaConduccion,
        page: this.page
      }
    });
  }

  openModalDesvincular(conductor: any) {
    this.dialog.open(ModalDesvinculacionMultipleComponent, {
      closeOnNavigation: false,
      disableClose: true,
      data: { idVinculacion: conductor.idVinculacion, page:this.page, tipo: 'conductor', cedula:  conductor.cedula}
    });
  }
}
