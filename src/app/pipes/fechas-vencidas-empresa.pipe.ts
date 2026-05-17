import { Pipe, PipeTransform } from '@angular/core';
import { FechasVencidasEmpresa } from '../interfaces';

@Pipe({
  name: 'fechasVencidasEmpresa'
})
export class FechasVencidasEmpresaPipe implements PipeTransform {

  transform(taxistas: FechasVencidasEmpresa[], texto: string): FechasVencidasEmpresa[] {
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
