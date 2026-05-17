import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { RespComentarios } from 'src/app/interfaces';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-select-pos',
  templateUrl: './select-pos.component.html',
  styleUrls: ['./select-pos.component.scss']
})
export class SelectPosComponent {
  @Output() select: EventEmitter<any> = new EventEmitter();
  get comentarios(): RespComentarios[] { return this.cS.comentariosP; }
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
