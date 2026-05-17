import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalActualizarDocumentosVehiculoComponent } from 'src/app/modals/modal-actualizar-documentos-vehiculo/modal-actualizar-documentos-vehiculo.component';
import { ModalDesvinculacionMultipleComponent } from 'src/app/modals/modal-desvinculacion-multiple/modal-desvinculacion-multiple.component';

@Component({
  selector: 'app-card-vehiculo',
  templateUrl: './card-vehiculo.component.html',
  styleUrls: ['./card-vehiculo.component.scss']
})
export class CardVehiculoComponent {
  @Input() vehiculos: any[] = [];
  @Input() page: number = 1;

  constructor(
    private dialog: MatDialog
  ) {}

  openModalActualizar(vehiculo: any, type:string) {
    this.dialog.open(ModalActualizarDocumentosVehiculoComponent, {
      closeOnNavigation: false,
      disableClose: true,
      autoFocus:false,
      data: { fechas: {...vehiculo}, idVehiculo: vehiculo.vehiculo_id, page: this.page, type }
    });
  }

  openModalDesvincular(vehiculo: any) {
    this.dialog.open(ModalDesvinculacionMultipleComponent, {
      closeOnNavigation: false,
      disableClose: true,
      data: { idVinculacion: vehiculo.vinculacion_id, page:this.page, tipo: 'vehiculo', placa: vehiculo.placa }
    });
  }

  isDatePast(dateString: string): boolean {
    const date = new Date(dateString);
    const currentDate = new Date();
    return date < currentDate;
  }

}
