import { Component, ElementRef, Inject, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef }                                      from '@angular/material/dialog';
import { Subscription }                                                       from 'rxjs';
import { PerfilEmpresaService }                                               from 'src/app/services/perfil-empresa.service';

@Component({
  selector: 'app-modal-terminos-politicas',
  templateUrl: './modal-terminos-politicas.component.html',
  styleUrls: ['./modal-terminos-politicas.component.scss']
})
export class ModalTerminosPoliticasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('contentWrapper') contentWrapper!: ElementRef;
  private subscription!: Subscription;
  canClose: boolean = false;
  nitEmpresa: string = '';
  empresa: string = '';
  fecha: string = '';

  constructor(
    private dialogRef: MatDialogRef<ModalTerminosPoliticasComponent>,
    private peS: PerfilEmpresaService,
    @Inject(MAT_DIALOG_DATA) public data: { section: string }
  ) {
    this.fecha = new Date().toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });

    this.subscription = this.peS.obtenerProfileEmpresa().subscribe({
      next: (data) => {
        this.empresa = data.razonSocial;
        this.nitEmpresa = data.nit;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.scrollToSection(this.data.section); // Desplaza a la sección después de cargar el componente
  }

  onScroll(event: Event): void {
    const target = event.target as HTMLElement;
    const isAtBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 1;

    if (isAtBottom) {
      this.canClose = true; // Habilita el botón si llega al final
    }
  }
  scrollToSection(section: string): void {
    const element = document.getElementById(section); // Encuentra el elemento por id
    const wrapper = this.contentWrapper.nativeElement;

    if (element && wrapper) {
      const offsetTop = element.offsetTop; // Calcula la posición del elemento

      // Espera 100ms antes de empezar el desplazamiento
      setTimeout(() => {
        wrapper.scrollTo({
          top: offsetTop,
          behavior: 'smooth' // Habilita el desplazamiento animado
        });
      }, 100); // Cambia el tiempo según lo que prefieras
    }
  }

  scrollToBottom(): void {
    const wrapper = this.contentWrapper.nativeElement;

    if (wrapper) {
      wrapper.scrollTo({
        top: wrapper.scrollHeight, // Desplázate hasta el final
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  }



  closeDialog(): void {
    this.dialogRef.close();
  }
}
