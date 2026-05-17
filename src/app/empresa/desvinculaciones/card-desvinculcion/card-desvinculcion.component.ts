import { Component, Input } from '@angular/core';
import { DataDesvinculacion } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-desvinculcion',
  templateUrl: './card-desvinculcion.component.html',
  styleUrls: ['./card-desvinculcion.component.scss']
})
export class CardDesvinculcionComponent {
  @Input() desvinculaciones: DataDesvinculacion[] = [];
  prevImg = environment.apiImg;
}
