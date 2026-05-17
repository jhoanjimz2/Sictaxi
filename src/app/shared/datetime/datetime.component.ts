import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { subDays } from 'date-fns';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent {
  @Output() select: EventEmitter<any> = new EventEmitter();
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  maxDate = new Date();
  minDate = new Date(subDays(new Date(), 7))
  selectDate() {
    if ( !this.range.value.end || !this.range.value.start) return;
    this.select.emit(this.range.value)
  }
}
