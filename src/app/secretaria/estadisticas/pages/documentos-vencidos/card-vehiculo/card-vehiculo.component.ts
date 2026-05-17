import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-vehiculo',
  templateUrl: './card-vehiculo.component.html',
  styleUrls: ['./card-vehiculo.component.scss']
})
export class CardVehiculoComponent {
  @Input() vehiculos: any[] = [];
  @Input() page: number = 1;


  isDatePast(dateString: string): boolean {
    const date = new Date(dateString);
    const currentDate = new Date();
    return date < currentDate;
  }

}
