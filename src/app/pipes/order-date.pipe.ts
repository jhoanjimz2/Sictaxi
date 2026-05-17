import { Pipe, PipeTransform } from '@angular/core';
import { Calificacion } from '../interfaces';

@Pipe({
  name: 'orderDate'
})
export class OrderDatePipe implements PipeTransform {

  transform(calificaciones: Calificacion[]): Calificacion[] {

    return calificaciones.sort((a,b) => {
      if (a.fechaRegistro < b.fechaRegistro) return 1;
      else return -1;
    });
  }

}
