import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss']
})
export class CardSimpleComponent {
  @Input() titulo   : string  = 'Titulo';
  @Input() data     : number  = 0;
  @Input() route    : string  = '';
  @Input() updating : boolean = false;
}
