import { Component, inject, OnInit }           from '@angular/core';
import { MatDialogRef }                        from '@angular/material/dialog';
import { Router }                              from '@angular/router';
import { environment }                         from 'src/environments/environment';

@Component({
  selector: 'app-alerta-modelo-suscripciones',
  templateUrl: './alerta-modelo-suscripciones.component.html',
  styleUrls: ['./alerta-modelo-suscripciones.component.scss']
})
export class AlertaModeloSuscripcionesComponent implements OnInit {
  expirationDate: string = environment.dateLimit;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;

  private dialogRef = inject(MatDialogRef<AlertaModeloSuscripcionesComponent>);
  private router = inject(Router)

  ngOnInit(): void {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  closeDialog() {
    localStorage.setItem('suscripcion_modal', 'true');
    this.dialogRef.close();
    this.router.navigateByUrl('/suscripciones');
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
