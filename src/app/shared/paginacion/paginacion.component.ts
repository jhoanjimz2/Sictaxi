import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.scss']
})
export class PaginacionComponent {
  @Output() paginar: EventEmitter<any> = new EventEmitter();
  @Input() cantidad: number = 0;
  @Input() focus = 1;
  anterior() {
    if (this.focus == 1) return;
    this.focus -= 1;
    this.paginar.emit({ pagina: this.focus });
  }
  siguiente() {
    if (this.focus == this.cantidad) return;
    this.focus += 1;
    this.paginar.emit({ pagina: this.focus });
  }
}
