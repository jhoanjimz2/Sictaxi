import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-dias-meses-anhos',
  templateUrl: './dias-meses-anhos.component.html',
  styleUrls: ['./dias-meses-anhos.component.scss']
})
export class DiasMesesAnhosComponent implements OnChanges {
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Input()  dias!: number;
  @Input()  meses!: number;
  @Input()  anhos!: number;
  formatGrafic: number = 1;

  constructor(private loading: LoadingService){}

  ngOnChanges() {
    if (this.anhos > 1) {
      this.formatGrafic = 3;
      this.select.emit(3);
    } else if (this.meses > 1) {
      this.formatGrafic = 2;
      this.select.emit(2);
    } else if (this.dias >= 1) {
      this.formatGrafic = 1;
      this.select.emit(1);
      if ( this.dias == 1) this.loading.error('Selecciona un rango de fecha que involucren almenos 2 días diferentes para una mejor visualización de la información');
    }
  }

  seleccionar(type: number) {
    if ( this.meses == 1 && type == 2) return this.loading.error('Selecciona un rango de fecha que involucren almenos 2 meses diferentes para una mejor visualización de la información');
    if ( this.anhos == 1 && type == 3) return this.loading.error('Selecciona un rango de fecha que involucren almenos 2 años diferentes para una mejor visualización de la información');
    this.formatGrafic = type;
    this.select.emit(type);
  }

}
