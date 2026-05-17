import { Component, OnInit }         from '@angular/core';
import { MatDialogRef }              from '@angular/material/dialog';
import { Router }                    from '@angular/router';
import { DocumentosVencidosService } from 'src/app/services/documentos-vencidos.service';

@Component({
  selector: 'app-modal-documentos-vencidos',
  templateUrl: './modal-documentos-vencidos.component.html',
  styleUrls: ['./modal-documentos-vencidos.component.scss']
})
export class ModalDocumentosVencidosComponent implements OnInit {
  vehiculosCount: number | null = null;
  conductoresCount: number  | null = null;
  especificaciones: any = {};
  type = localStorage.getItem('role')

  constructor(
    private dialog: MatDialogRef<ModalDocumentosVencidosComponent>,
    private router: Router,
    private DVS: DocumentosVencidosService
  ) {}

  ngOnInit(): void {
    this.DVS.obtenerVehiculosCount().subscribe((count) => {
      this.vehiculosCount = count;
    });
    this.DVS.obtenerConductoresCount().subscribe((count) => {
      this.conductoresCount = count;
    });
    this.DVS.obtenerEspecificacionesData().subscribe((data) => {
      this.especificaciones = data;
    });
    this.DVS.cargarDocumentosVencidos().subscribe();
  }

  close() {
    localStorage.setItem('documentos', 'true');
    this.dialog.close();
  }

  actualizar() {
    localStorage.setItem('documentos', 'true');
    this.router.navigateByUrl('/empresa/documentos-vencidos');
    this.dialog.close();
  }
  ver() {
    localStorage.setItem('documentos', 'true');
    this.router.navigateByUrl('/secretaria/documentos-vencidos');
    this.dialog.close();
  }
}
