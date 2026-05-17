import { Pipe, PipeTransform } from '@angular/core';
import { ConductorConCalificacion } from '../interfaces';

@Pipe({
  name: 'taxistasEasy'
})
export class TaxistasEasyPipe implements PipeTransform {

  transform(taxistas: ConductorConCalificacion[], texto: string): ConductorConCalificacion[] {
    if (texto.length === 0) {
      return taxistas;
    }
    return taxistas.filter( taxista => {
      return taxista.placa.toLowerCase().replace(/ /g,'').indexOf(texto.toLowerCase().replace(/ /g,'')) > -1;
    });
  }

}
