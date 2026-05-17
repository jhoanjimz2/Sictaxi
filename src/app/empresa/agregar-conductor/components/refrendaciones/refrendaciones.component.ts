import { Component, EventEmitter, inject, Output} from '@angular/core';
import { AddConductorService } from 'src/app/services/add-conductor.service';

@Component({
  selector: 'app-refrendaciones',
  templateUrl: './refrendaciones.component.html',
  styleUrls: ['./refrendaciones.component.scss']
})
export class RefrendacionesComponent {
  private aC = inject(AddConductorService);
  get refrendaciones() { return this.aC.refrendaciones}
  @Output() refrendar: EventEmitter<any> = new EventEmitter();
  _refrendar() {
    this.refrendar.emit();
  }
}
