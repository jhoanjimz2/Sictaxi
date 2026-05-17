import { Component, EventEmitter, inject, Output }    from '@angular/core';
import { EmpresaAutorizada }                          from 'src/app/interfaces';
import { DocumentosVencidosService }                  from 'src/app/services/documentos-vencidos.service';
import { EstadisticasService }                        from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  @Output() select:EventEmitter<any> = new EventEmitter();

  private ES = inject(EstadisticasService);
  private DV = inject(DocumentosVencidosService);

  selectedEmpresaLocal: EmpresaAutorizada | null = null;

  empresas: EmpresaAutorizada[] = [];

  constructor() {
    this.ES.getEmpresas().subscribe({next: (data: EmpresaAutorizada[]) => this.ES._empresasFiltro.next(data)})
    this.ES._selectedEmpresa.subscribe(value => {
      this.selectedEmpresaLocal = value;
    });
    this.ES._empresasFiltro.subscribe(value => {
      this.empresas = value;
    });
  }

  onEmpresaChange(empresa: EmpresaAutorizada) {
    this.ES._selectedEmpresa.next(empresa);
    this.DV._selectedEmpresa.next(empresa);
    this.select.emit()
  }
}
