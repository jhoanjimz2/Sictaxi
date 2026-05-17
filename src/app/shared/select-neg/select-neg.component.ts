import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { RespComentarios } from 'src/app/interfaces';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-select-neg',
  templateUrl: './select-neg.component.html',
  styleUrls: ['./select-neg.component.scss']
})
export class SelectNegComponent {
  @Output() select: EventEmitter<any> = new EventEmitter();
  get comentarios(): RespComentarios[] { return this.cS.comentariosN; }
  debounceSelect: Subject<string> = new Subject();

  constructor(private cS: ComentariosService) {
    this.debounceSelect.pipe(debounceTime(1000)).subscribe(valor => {
      this.cambio(valor);
    })
  }
  debounce(event: any) {
    this.debounceSelect.next(event.value);
  }
  cambio(value: any) {
    this.select.emit(value);
  }
}
