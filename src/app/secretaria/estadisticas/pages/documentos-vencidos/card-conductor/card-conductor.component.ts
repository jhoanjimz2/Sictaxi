import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-conductor',
  templateUrl: './card-conductor.component.html',
  styleUrls: ['./card-conductor.component.scss']
})
export class CardConductorComponent {
  @Input() conductores: any[] = [];
  @Input() page: number = 1;
}
