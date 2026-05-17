import { Component }                           from '@angular/core';
import { subMonths }                           from 'date-fns';
import { Graficas, RespGraficaCalificaciones } from 'src/app/interfaces';
import { EstadisticasService }                 from 'src/app/services/estadisticas.service';
import * as moment                             from 'moment';
import Chart                                   from 'chart.js/auto';
import { DownloadService }                     from 'src/app/services/download.service';

@Component({
  selector: 'app-card-grafica-calificaciones',
  templateUrl: './card-grafica-calificaciones.component.html',
  styleUrls: ['./card-grafica-calificaciones.component.scss']
})
export class CardGraficaCalificacionesComponent {

  formatGrafic: number = 1;
  typeGrafic: number = 2;
  dataGraficaCalificacionesDias: Graficas = {} as Graficas;
  dataGraficaCalificacionesMeses: Graficas = {} as Graficas;
  dataGraficaCalificacionesAnhos: Graficas = {} as Graficas;
  chart: any;
  fechaFinal = moment(new Date()).format("YYYY-MM-DD");
  fechaInicial = moment(subMonths(new Date(), 1)).format("YYYY-MM-DD");
  ceroDatos: boolean = false;

  get seleccionados() {
    return  this.chart?.data?.datasets?.map( (item: any) => {
      return {
        color: item.borderColor,
        comentario: item.label,
        cantidad: item.data.reduce((a: number, b: number) => a + b, 0)
      }
    })
  }
  constructor(
    private eS: EstadisticasService,
    private download: DownloadService
  ) { this.cargarData(); }

  cargarData(bandera = false) {
    this.eS.getGraficaCalificaciones({
      fechaFinal: this.fechaFinal,
      fechaInicial: this.fechaInicial
    }).subscribe({
      next: (data: RespGraficaCalificaciones) => {
        this.setDatasetsDias(data);
        this.setDatasetsMeses(data);
        this.setDatasetsAnhos(data);
        if ( bandera ) this.updateGrafica();
        else this.createChart();
      }});
  }
  setDatasetsDias(data: RespGraficaCalificaciones) {
    let fechas = data.positive.map( item => { return item.fecha });
    let pos: number[] = data.positive.map( item => { return item.cantidad });
    let neg: number[] = data.negative.map( item => { return item.cantidad });
    this.ceroDatos = true;
    pos.forEach(num => { if (num) this.ceroDatos = false; });
    neg.forEach(num => { if (num) this.ceroDatos = false; });
    let datasets = [ { data: pos, label: 'Buenas Calificaciones'}, { data: neg, label: 'Malas  Calificaciones'} ]
    this.dataGraficaCalificacionesDias.datasets = datasets;
    this.dataGraficaCalificacionesDias.labels = fechas;
  }

  setDatasetsMeses(data: RespGraficaCalificaciones) {
    let stringFechas = data.positive.map( item => { return moment(item.fecha).format("YYYY-MM") })
    let setFechas = new Set(stringFechas);
    let fechas = [...setFechas];
    let pos: number[] = [];
    let neg: number[] = [];
    fechas.forEach(_fecha => {
      let posi = data.positive.filter(({fecha}) => moment(fecha).format("YYYY-MM") === moment(_fecha).format("YYYY-MM"));
      let nega = data.negative.filter(({fecha}) => moment(fecha).format("YYYY-MM") === moment(_fecha).format("YYYY-MM"));
      let posiN = posi.map( item => { return item.cantidad });
      let negaN = nega.map( item => { return item.cantidad });
      pos.push(posiN.reduce((a: number, b: number) => a + b, 0));
      neg.push(negaN.reduce((a: number, b: number) => a + b, 0));
    });
    let datasets = [ { data: pos, label: 'Buenas Calificaciones'}, { data: neg, label: 'Malas  Calificaciones'} ]
    this.dataGraficaCalificacionesMeses.datasets = datasets;
    this.dataGraficaCalificacionesMeses.labels = fechas;
  }



  setDatasetsAnhos(data: RespGraficaCalificaciones) {
    let stringFechas = data.positive.map( item => { return moment(item.fecha).format("YYYY") })
    let setFechas = new Set(stringFechas);
    let fechas = [...setFechas];
    let pos: number[] = [];
    let neg: number[] = [];
    fechas.forEach(_fecha => {
      let posi = data.positive.filter(({fecha}) => moment(fecha).format("YYYY") === moment(_fecha).format("YYYY"));
      let nega = data.negative.filter(({fecha}) => moment(fecha).format("YYYY") === moment(_fecha).format("YYYY"));
      let posiN = posi.map( item => { return item.cantidad });
      let negaN = nega.map( item => { return item.cantidad });
      pos.push(posiN.reduce((a: number, b: number) => a + b, 0));
      neg.push(negaN.reduce((a: number, b: number) => a + b, 0));
    });
    let datasets = [ { data: pos, label: 'Buenas Calificaciones'}, { data: neg, label: 'Malas  Calificaciones'} ]
    this.dataGraficaCalificacionesAnhos.datasets = datasets;
    this.dataGraficaCalificacionesAnhos.labels = fechas;
  }
  setFormat(type: number) {
    ;
    this.formatGrafic = type;
    this.updateGrafica();
  }
  updateGrafica() {
    this.chart.config.options = {
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { display: false }, title:{ text: 'Número de quejas', display: true } },
        x: { grid: { display: false }, title: {
          text:
            (this.formatGrafic == 1) ? 'Días'  :
            (this.formatGrafic == 2) ? 'Meses' :
            (this.formatGrafic == 3) ? 'Años'  : null,
          display: true
        }}
      }
    };

    this.chart.config.data =
      (this.formatGrafic == 1) ? this.dataGraficaCalificacionesDias :
      (this.formatGrafic == 2) ? this.dataGraficaCalificacionesMeses :
      (this.formatGrafic == 3) ? this.dataGraficaCalificacionesAnhos : {} as Graficas;

    this.chart.update();
    ;
  }

  typeGrafica(number: number) {
    this.typeGrafic = number;
    if (number == 2) this.chart.config.type = "bar";
    else this.chart.config.type = "line";
    this.chart.update();
  }
  createChart() {
    this.chart = new Chart("ChartCalificaciones",  {
      type: 'bar',
      data:
        (this.formatGrafic == 1) ? this.dataGraficaCalificacionesDias :
        (this.formatGrafic == 2) ? this.dataGraficaCalificacionesMeses :
        (this.formatGrafic == 3) ? this.dataGraficaCalificacionesAnhos : {} as Graficas,
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { display: false }, title:{ text: 'Número de quejas', display: true } },
          x: { grid: { display: false }, title: {
            text: 'Días',
            display: true
          }}
        }
      }
    });
    ;
  }
  selectDate({start, end}: any) {
    this.fechaFinal = moment(end).format("YYYY-MM-DD");
    this.fechaInicial = moment(start).format("YYYY-MM-DD");
    this.cargarData(true);
  }
  exportar() {
    this.eS.exportDataGraphCalificacionesGeneral({
      fechaFinal: this.fechaFinal,
      fechaInicial: this.fechaInicial
    }).subscribe({
      next: (data: any) => {
        this.download.download(data, 'Reporte de calificaciones');
      }})
  }



}
