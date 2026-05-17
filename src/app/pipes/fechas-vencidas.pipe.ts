import { Pipe, PipeTransform } from '@angular/core';
import { FechasVencidas } from '../interfaces';

@Pipe({
  name: 'fechasVencidas'
})
export class FechasVencidasPipe implements PipeTransform {

  transform(taxistas: FechasVencidas[], texto: string): FechasVencidas[] {
    if (texto.length === 0) {
      return taxistas;
    }
    return taxistas.filter( taxista => {
      if ( taxista.placa.indexOf(texto.replace(/ /g,'')) > -1 ) return taxista;
      else if ( taxista.cedula.indexOf(texto.replace(/ /g,'')) > -1 ) return taxista;
      return;
    });
  }

}
