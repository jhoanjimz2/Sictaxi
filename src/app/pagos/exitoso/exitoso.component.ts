import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuscripcionesService }   from 'src/app/services/suscripciones.service';

@Component({
  selector: 'app-exitoso',
  templateUrl: './exitoso.component.html',
  styleUrls: ['./exitoso.component.scss']
})
export class ExitosoComponent implements OnInit {

  transaction_id: string = '';
  amount:         string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private suscripcionesServices: SuscripcionesService
  ) {}

  ngOnInit(): void {
    const encryptedData = this.route.snapshot.paramMap.get('data');

    this.route.queryParams.subscribe(params => {
      this.transaction_id = params['preapproval_id'];
    });

    // const decryptedData = this.suscripcionesServices.decryptData(encryptedData!);

    // this.amount = decryptedData.amount;
  }

  goToDashboard() {
    this.router.navigate(['#']);
  }

}
