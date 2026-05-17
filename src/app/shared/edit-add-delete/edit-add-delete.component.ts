import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Action } from 'src/app/interfaces';
import { ModalCrearParametroComponent } from 'src/app/modals/modal-crear-parametro/modal-crear-parametro.component';
import { ModalEliminarParametroComponent } from 'src/app/modals/modal-eliminar-parametro/modal-eliminar-parametro.component';

@Component({
  selector: 'app-edit-add-delete',
  templateUrl: './edit-add-delete.component.html',
  styleUrls: ['./edit-add-delete.component.scss']
})
export class EditAddDeleteComponent {
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Input() action!: Action;
  @Input() id!: string;
  @Input() texto!: string;
  constructor( private dialog: MatDialog ) {}
  editar(action: Action, id: string | null, texto: string) {
    this.edit.emit({ action, id, texto })
  }
  eliminar(action: Action, id: string) {
    this.delete.emit({ action, id })
  }
}
