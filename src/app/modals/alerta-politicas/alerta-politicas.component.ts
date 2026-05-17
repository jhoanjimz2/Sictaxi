import { Component, inject, OnDestroy }    from '@angular/core';
import { ModalTerminosPoliticasComponent } from '../modal-terminos-politicas/modal-terminos-politicas.component';
import { MatDialog, MatDialogRef }         from '@angular/material/dialog';
import { PerfilEmpresaService }            from 'src/app/services/perfil-empresa.service';
import { Subscription }                    from 'rxjs';
import { ModalsService }                   from 'src/app/services/modals.service';
import { Termino }                         from 'src/app/interfaces';

@Component({
  selector: 'app-alerta-politicas',
  templateUrl: './alerta-politicas.component.html',
  styleUrls: ['./alerta-politicas.component.scss']
})
export class AlertaPoliticasComponent implements OnDestroy {

  private dialogRef = inject(MatDialogRef<AlertaPoliticasComponent>);
  private dialog    = inject(MatDialog);

  private subscription!: Subscription;

  private id: number | null = null;

  constructor(
    private perfilEmpresaService: PerfilEmpresaService,
    private modalsService: ModalsService
  ) {
    this.subscription = this.perfilEmpresaService.obtenerProfileEmpresa().subscribe({
      next: (data) => { this.id = data.id; }
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  aceptar() {
    this.modalsService.llamarTodosLosServiciosEmpresa(this.id!)
      .subscribe(() => this.dialogRef.close());
  }

  terminosModal(section:string) {
    const dialogRef = this.dialog.open(ModalTerminosPoliticasComponent, {
      disableClose: true,
      data: {section}
    });
  }
}
