import { LoadingService }                                  from 'src/app/services/loading.service';
import { RespGetPerfilEmpresa, UpdateProfileEmpresa }      from 'src/app/interfaces';
import { PerfilEmpresaService }                            from 'src/app/services/perfil-empresa.service';
import { Component, ElementRef, OnDestroy, ViewChild }     from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment }                                     from 'src/environments/environment';
import * as moment                                         from 'moment';
import { Subscription }                                    from 'rxjs';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.scss']
})
export class PerfilEmpresaComponent implements OnDestroy {
  @ViewChild('myInput') input!: ElementRef;
  private subscription!: Subscription;
  img: string = '';
  imgsubir!:File;
  imgBase64!:string | ArrayBuffer | null;

  form: FormGroup = this.fb.group({
    nit: new FormControl('', [Validators.required]),
    razonSocial: new FormControl('', [Validators.required]),
    sigla: new FormControl('', [Validators.required]),
    idCiudadPrincipal: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    cedulaRepresentante: new FormControl('', [Validators.required]),
    idCiudadCedulaRepresentante: new FormControl('', [Validators.required]),
    nombreRepresentante: new FormControl('', [Validators.required]),
    direccionRepresentante: new FormControl('', [Validators.required]),
    telefonoRepresentante: new FormControl('', [Validators.required]),
    fechaHabilitacion: new FormControl('', [Validators.required]),
    numeroActoAdministrativo: new FormControl('', [Validators.required]),
    capacidadVinculada: new FormControl('', [Validators.required]),
  });
  constructor(
    private loading: LoadingService,
    private peS: PerfilEmpresaService,
    private fb: FormBuilder
  ) {
    this.subscription = this.peS.obtenerProfileEmpresa().subscribe({
      next: (data) => {
        this.rellenar(data)
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
  rellenar(data: RespGetPerfilEmpresa) {
    this.form.controls['nit'].setValue(data.nit);
    this.form.controls['razonSocial'].setValue(data.razonSocial);
    this.form.controls['sigla'].setValue(data.sigla);
    this.form.controls['idCiudadPrincipal'].setValue(data.idCiudadPrincipal);
    this.form.controls['direccion'].setValue(data.direccion);
    this.form.controls['telefono'].setValue(data.telefono);
    this.form.controls['celular'].setValue(data.celular);
    this.form.controls['email'].setValue(data.email);
    this.form.controls['cedulaRepresentante'].setValue(data.cedulaRepresentante);
    this.form.controls['idCiudadCedulaRepresentante'].setValue(data.idCiudadCedulaRepresentante);
    this.form.controls['nombreRepresentante'].setValue(data.nombreRepresentante);
    this.form.controls['direccionRepresentante'].setValue(data.nombreRepresentante);
    this.form.controls['telefonoRepresentante'].setValue(data.telefonoRepresentante);
    this.form.controls['fechaHabilitacion'].setValue(this.setFormat(data.fechaHabilitacion));
    this.form.controls['numeroActoAdministrativo'].setValue(data.numeroActoAdministrativo);
    this.form.controls['capacidadVinculada'].setValue(data.capacidadVinculada);
    this.form.controls['email'].disable();
    this.img = environment.apiImgEmpresas + data.logo;
  }
  setFormat(fecha: string | Date) {
    if (!fecha) return '';
    return moment(fecha).format('DD/MM/YYYY');
  }

  guardar() {
    let data: UpdateProfileEmpresa = {
      ...this.form.value,
      foto: this.imgsubir,
      id: JSON.parse(localStorage.getItem('user')!).idempresa,
      fechaHabilitacion: moment(this.form.controls['fechaHabilitacion'].value).format('DD/MM/YYYY')
    }
    this.peS.updateCompanyPhoto(data).subscribe()
  }


 addimg(event: any) {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) return this.loading.error('Solo se permite subir imagenes');
    if (event.target.files[0].size > 2000000) return this.loading.error('Imagen muy grande para subir');
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = async (_event) => {
      this.imgsubir = event.target.files[0];
      this.img = reader.result!.toString();
      const _reader = new FileReader();
      reader.readAsDataURL(this.imgsubir);
      reader.onload = () => {
        this.imgBase64 = reader.result;
      };
      return;
    }
    this.input.nativeElement.disabled = true;
  }
  abrirImg () {
    this.input.nativeElement.disabled = false;
    this.input.nativeElement.click()
  }
}
