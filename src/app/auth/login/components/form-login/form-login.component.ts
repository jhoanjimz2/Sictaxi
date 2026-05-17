import { Component }                                       from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router }                                          from '@angular/router';
import { AuthService }                                     from 'src/app/services/auth.service';
import { LoadingService }                                  from 'src/app/services/loading.service';
// import { SuscripcionesService }                            from 'src/app/services/suscripciones.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  show: boolean = false;

  formulario: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private aS: AuthService,
    private router: Router,
    // private suscriptionService: SuscripcionesService,
    private loading: LoadingService,
  ) {}
  olvi() {
    var divLogin = (<HTMLDivElement>document.getElementById("contenedor-login"));
    divLogin.setAttribute("class","throubles");
  }

  login() {
    this.aS.login(
      this.formulario.controls['email'].value,
      this.formulario.controls['password'].value
    ).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.rol);
        localStorage.setItem('user', JSON.stringify(data.user));
        const role = localStorage.getItem('role');
        if (role === 'Secretaria') this.router.navigateByUrl('/secretaria');
        else this.router.navigateByUrl('/empresa');
        // this.suscriptionService.getMyPlan().subscribe({
        //   next: () => {
        //     localStorage.setItem('suscription', this.suscriptionService.encryptData({suscription: true}));

        //     const role = localStorage.getItem('role');
        //     if (role === 'Secretaria') this.router.navigateByUrl('/secretaria');
        //     else this.router.navigateByUrl('/empresa');
        //   },
        //   error: (error:any) => {
        //     this.loading.error(error.error.message, true);
        //     this.router.navigateByUrl('/suscripciones');
        //   }
        // });
      }
    });
  }

}
