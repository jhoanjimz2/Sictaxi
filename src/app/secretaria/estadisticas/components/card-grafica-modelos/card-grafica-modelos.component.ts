import { Component, OnDestroy }           from '@angular/core';
import { Grafica }                        from 'src/app/interfaces';
import Chart                   from 'chart.js/auto';
import { EstadisticasService }            from 'src/app/services/estadisticas.service';
import { Subscription }                   from 'rxjs';

@Component({
  selector: 'app-card-grafica-modelos',
  templateUrl: './card-grafica-modelos.component.html',
  styleUrls: ['./card-grafica-modelos.component.scss']
})
export class CardGraficaModelosComponent implements OnDestroy {
  private subscriptions: Subscription = new Subscription();
  chart: any;

  constructor(private eS: EstadisticasService) {
    const sub = this.eS._selectedEmpresa.subscribe(() => {
      const modelosSub = this.eS.getModelos().subscribe({
        next: (data: Grafica[]) => {
          this.createChart(data);
        }
      });

      this.subscriptions.add(modelosSub);
    });

    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  createChart(_data: Grafica[]) {
    if (this.chart) {
      this.chart.destroy();
    }

    let data: any = _data.map(item => item.value);
    let labels: any = _data.map(item => item.name);
    let backgroundColor: any = _data.map(item => item.color);

    let speedData = { labels, datasets: [{ data, backgroundColor }] };
    let df = { display: false };

    this.chart = new Chart("ChartModelo", {
      type: 'bar',
      data: speedData,
      options: {
        plugins: { legend: df },
        scales: {
          y: { grid: df },
          x: {
            grid: df,
            ticks: { maxRotation: 90 }
          }
        }
      }
    });
  }


}
