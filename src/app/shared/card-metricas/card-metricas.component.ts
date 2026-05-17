import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { CardsMetricas } from 'src/app/interfaces';
import { exampleGraphic } from 'src/assets/data/example';

@Component({
  selector: 'app-card-metricas',
  templateUrl: './card-metricas.component.html',
  styleUrls: ['./card-metricas.component.scss']
})
export class CardMetricasComponent {
  @Input() item: CardsMetricas = {} as CardsMetricas;
  @Input() idGrafica: string = '';
  chart: any;

  ngAfterViewInit() {
    setTimeout(() => {this.createChart()}, 0);
  }

  createChart() {
    let data: any = exampleGraphic.map(item => { return item.value;});
    let labels: any = exampleGraphic.map(item => { return item.name;});
    let backgroundColor: any = exampleGraphic.map(item => { return item.color;});
    let speedData = { labels, datasets: [ { data, backgroundColor } ] };
    let df = { display: false };
    this.chart = new Chart(this.idGrafica,  {
      type: 'line',
      data: speedData,
      options: {
        plugins: { legend: df },
        scales: {
          y: df,
          x: df
        }
      }
    });
  }
}
