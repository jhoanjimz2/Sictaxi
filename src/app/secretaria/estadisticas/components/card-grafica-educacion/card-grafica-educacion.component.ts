import { Component } from '@angular/core';
import Chart                   from 'chart.js/auto';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { Grafica }             from '../../../../interfaces';

@Component({
  selector: 'app-card-grafica-educacion',
  templateUrl: './card-grafica-educacion.component.html',
  styleUrls: ['./card-grafica-educacion.component.scss']
})
export class CardGraficaEducacionComponent {
  chart: any;
  data: Grafica[] = [];
  constructor( private eS: EstadisticasService) {
    eS.getNivelEducativo().subscribe({
      next: (data: Grafica[]) => {
        this.data = data;
        this.createChart(data);
      }
    });
  }
  createChart(_data: Grafica[]){
    let data: any = _data.map(item => { return item.value;});
    let backgroundColor: any = _data.map(item => { return item.color;});
    let labels: any = _data.map(item => { return item.name;});
    this.chart = new Chart("ChartEducacion", {
      type: 'doughnut',
      data: { datasets: [ { data, backgroundColor ,hoverOffset: 4 } ], labels },
      options: {
        aspectRatio:2,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            mode: 'nearest',
            callbacks: {
              label: (context: any): string => {
                const total = context.dataset.data.reduce((a:number, b:number) => a + b, 0);
                const tooltipPercentage = Math.round((context.formattedValue.replace(/\D/g, '') / total) * 100);
                return context.label + ': ' + context.formattedValue + ' (' + tooltipPercentage + '%)';
              }
            }
          }
        }
      },
    });
  }

}
