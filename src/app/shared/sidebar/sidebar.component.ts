import { Component }                     from '@angular/core';
import { ItemSidebar, Usuario }          from 'src/app/interfaces';
import { secretaria, empresa, auxiliar } from '../../../assets/data/sidebar';
import { AuthService }                   from 'src/app/services/auth.service';
import { Router }                        from '@angular/router';
import { DocumentosVencidosService }     from 'src/app/services/documentos-vencidos.service';
// import { SuscripcionesService }          from 'src/app/services/suscripciones.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items!: ItemSidebar[];
  totalDocumentosVencidos: number = 0;

  get user(): Usuario {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }


  constructor(
    private aS: AuthService,
    private router: Router,
    private DVS: DocumentosVencidosService,
    // private suscriptionService: SuscripcionesService
  ) {
    if( this.user?.rol == 'Secretaria' ) this.items = secretaria;
    else if( this.user?.rol == 'Empresa' ) this.items = empresa;
    else this.items = auxiliar;
  }

  ngOnInit(): void {
    this.DVS.obtenerTotalDocumentosVencidos().subscribe(total => {
      this.totalDocumentosVencidos = total;
    });
    this.DVS.cargarEspecificacionesContador().subscribe();
  }

  logout() {
    this.aS.logout().subscribe({
      next: (data: any) => {
        localStorage.clear();
        this.router.navigateByUrl('/auth');
      },
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

}
