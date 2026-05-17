import { Component } from '@angular/core';
import { Grafica } from '../../../../interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-card-grafica-estrato',
  templateUrl: './card-grafica-estrato.component.html',
  styleUrls: ['./card-grafica-estrato.component.scss']
})
export class CardGraficaEstratoComponent {
  chart: any;
  data: Grafica[] = [];
  constructor( private eS: EstadisticasService) {
    eS.getNivelEstrato().subscribe({
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
    this.chart = new Chart("ChartEstrato", {
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
