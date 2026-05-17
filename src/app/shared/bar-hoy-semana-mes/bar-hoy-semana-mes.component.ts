import { Component, EventEmitter, Input, Output } from '@angular/core';
import { subWeeks, subMonths } from 'date-fns';

@Component({
  selector: 'app-bar-hoy-semana-mes',
  templateUrl: './bar-hoy-semana-mes.component.html',
  styleUrls: ['./bar-hoy-semana-mes.component.scss']
})
export class BarHoySemanaMesComponent {
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Input() cargando: boolean = false;
  @Input() titulo: string = '';
  type:number = 2;
  hoy() {
    if( this.cargando ) return;
    this.type = 1;
    this.select.emit({
      start: new Date(),
      end: new Date()
    })
  }
  semana() {
    if( this.cargando ) return;
    this.type = 2;
    this.select.emit({
      start: new Date(subWeeks(new Date(), 1)),
      end: new Date()
    })
  }
  mes() {
    if( this.cargando ) return;
    this.type = 3;
    this.select.emit({
      start: new Date(subMonths(new Date(), 1)),
      end: new Date()
    })
  }
}
