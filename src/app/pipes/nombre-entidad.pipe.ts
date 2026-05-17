import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreEntidad',
  pure: false
})
export class NombreEntidadPipe implements PipeTransform {
  transform(id: number, lista: any[]): string {
    if (!lista || lista.length === 0) return 'No registra';

    const entidad = lista.find((item) => item.id === id);
    return entidad ? entidad.nombre : 'No registra';
  }
}
