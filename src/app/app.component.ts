import { Component }                         from '@angular/core';
import { Router }                            from '@angular/router';
import { ModalInitCambiarPasswordComponent } from './modals/modal-init-cambiar-password/modal-init-cambiar-password.component';
import { MatDialog }                         from '@angular/material/dialog';
// import { SuscripcionesService }              from './services/suscripciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sictaxi';
  showFooter = true;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    // private suscriptionService: SuscripcionesService
  ) {
    if (localStorage.getItem('suscripcion')) localStorage.removeItem('suscripcion');
    if (localStorage.getItem('documentos')) localStorage.removeItem('documentos');
    if (localStorage.getItem('user')) {
      if (JSON.parse(localStorage.getItem('user')!).solicitarCambioclave == 1) {
        this.cambiarPassword();
      }
    }
    this.router.events.subscribe(() => {
      this.showFooter = !['/suscripciones/planes'].includes(this.router.url) &&
                        !this.router.url.startsWith('/pagos/exitoso/');
    });
  }
  // get suscription() {
  //   try {
  //     const encryptedData = localStorage.getItem('suscription');
  //     if (!encryptedData) return null;
  //     const decryptedData = this.suscriptionService.decryptData(encryptedData);
  //     return decryptedData?.suscription ?? null;
  //   } catch (error) {
  //     return null;
  //   }
  // }
  cambiarPassword() {
    const dialogRef = this.dialog.open(ModalInitCambiarPasswordComponent, {
      closeOnNavigation: false,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  get user() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }




}
