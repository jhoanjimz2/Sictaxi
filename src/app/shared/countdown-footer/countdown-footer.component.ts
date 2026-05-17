import { Component, OnInit }        from '@angular/core';
import { environment }              from 'src/environments/environment';

@Component({
  selector: 'app-countdown-footer',
  templateUrl: './countdown-footer.component.html',
  styleUrls: ['./countdown-footer.component.scss']
})
export class CountdownFooterComponent implements OnInit {
  expirationDate: string = environment.dateLimit;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const expirationTime = new Date(this.expirationDate).getTime();
    const timeDiff = expirationTime - now;

    if (timeDiff <= 0) {
      clearInterval(this.intervalId);
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  }
}
