import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef }          from '@angular/material/dialog';
import { LoadingService }                   from 'src/app/services/loading.service';
import { ModalTomarFotoComponent }          from '../modal-tomar-foto/modal-tomar-foto.component';
import { EstadisticasService }              from 'src/app/services/estadisticas.service';
import { Usuario }                          from 'src/app/interfaces';

@Component({
  selector: 'app-modal-cambiar-img-profile',
  templateUrl: './modal-cambiar-img-profile.component.html',
  styleUrls: ['./modal-cambiar-img-profile.component.scss']
})
export class ModalCambiarImgProfileComponent {
  @ViewChild('myInput') input!: ElementRef;
  img: string = '';
  imgsubir!:File;
  id = JSON.parse(localStorage.getItem('user')!).id;
  get user(): Usuario { return JSON.parse(localStorage.getItem('user')!); }
  constructor(
    private loading: LoadingService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ModalCambiarImgProfileComponent>,
    private eS: EstadisticasService
  ) {}
  addimg(event: any) {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) return this.loading.error('Solo se permite subir imagenes');
    if (event.target.files[0].size > 2000000) return this.loading.error('Imagen muy grande para subir');
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgsubir = event.target.files[0];
      this.img = reader.result!.toString();
      return;
    }
    this.input.nativeElement.disabled = true;
  }
  abrirImg () {
    this.input.nativeElement.disabled = false;
    this.input.nativeElement.click()
  }
  tomarFoto() {
    const _dialogRef = this.dialog.open(ModalTomarFotoComponent, {});
    _dialogRef.afterClosed().subscribe(result => {
      if (result.html) this.img = result.html.toString();
      if (result.file) this.imgsubir = result.file;
    });
  }
  guardarImg() {
    let local: Usuario = JSON.parse(localStorage.getItem('user')!);
    this.eS.cambiarImgDePerfil(this.id,this.imgsubir).subscribe({
      next: (data: { fotoUrl: string }) => {
        local.fotoUrl = data.fotoUrl;
        localStorage.setItem('user', JSON.stringify(local));
        this.dialogRef.close();
      }, error: () => {
        this.dialogRef.close();
      }
    })
  }

}
