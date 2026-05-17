import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss']
})
export class BarraBusquedaComponent {
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  @Input() placeholder: string = '';
  searching: FormGroup = new FormGroup({
    search: new FormControl(''),
  });
  debounceSelect: Subject<string> = new Subject();
  constructor() {
    this.debounceSelect.pipe(debounceTime(1000)).subscribe(valor => {
      this.buscar();
    })
  }
  debounce() {
    this.debounceSelect.next(this.searching.controls['search'].value);
  }
  buscar() {
    this.searchEvent.emit(this.searching.controls['search'].value);
  }
}
