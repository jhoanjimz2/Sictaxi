import { Component, Input } from '@angular/core';
import { RespComentarios } from 'src/app/interfaces';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-opciones-grafica',
  templateUrl: './opciones-grafica.component.html',
  styleUrls: ['./opciones-grafica.component.scss']
})
export class OpcionesGraficaComponent {
  @Input() seleccionados!: {color: string, comentario: string, cantidad: string}[];
  @Input() type!: 'NEG' | 'POS' | 'CAL';

  get comentariosN(): RespComentarios[] { return this.cS.comentariosN; }
  get comentariosP(): RespComentarios[] { return this.cS.comentariosP; }

  hover = '';

  calificaciones = [
    { comentario: 'Buenas Calificaciones'},
    { comentario: 'Malas  Calificaciones'}
  ]

  constructor(private cS: ComentariosService) {}

  color (comentario: string): string {
    return this.seleccionados?.find(element => element.comentario == comentario)?.color || 'white'
  }
  cantidad (comentario: string) : string {
    return this.seleccionados?.find(element => element.comentario == comentario)?.cantidad || '0'
  }
  
}