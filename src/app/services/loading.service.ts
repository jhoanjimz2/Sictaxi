import { Injectable } from '@angular/core';
import Swal           from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private requestCount = 0;

  _loading: boolean = false;
  get loading(): boolean { return this._loading; }
  set loading(value: boolean) { this._loading = value; }

  show() {
    this.requestCount++;
    this.loading = true;
  }

  hide() {
    if (this.requestCount > 0) {
      this.requestCount--;
    }
    if (this.requestCount === 0) {
      this.loading = false;
    }
  }

  error(message: string, newOpen: boolean = false) {
    if (Swal.isVisible() && !newOpen) return;
    Swal.fire('Error', message, 'error');
  }

  exito(message: string, newOpen: boolean = false) {
    if (Swal.isVisible() && !newOpen) return;
    Swal.fire('Éxito', message, 'success');
  }

  info(message: string) {
    if (Swal.isVisible()) return;
    Swal.fire('', message, 'info');
  }

  confirm(question: string, confirmText: string = 'Sí', cancelText: string = 'No') {
    return Swal.fire({
      title: question,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText
    });
  }

}
