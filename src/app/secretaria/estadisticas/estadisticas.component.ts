import { Component }            from '@angular/core';
import { Cards }                from 'src/app/interfaces';
import { EstadisticasService }  from '../../services/estadisticas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent {
  dataCards: Cards = {} as Cards;

  get empresa() { return this.eS._selectedEmpresa.value?.nombreEmpresa }

  constructor(private eS: EstadisticasService) {
    this.getCards()
  }

  getCards() {
    this.eS.getCards().subscribe({next: (data: Cards) => {
      this.dataCards = data;
    }})
  }

}
