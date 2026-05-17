import {Component, Inject}               from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RespFichaVinculacion }          from 'src/app/interfaces';
import { SearchCondutoresService }       from 'src/app/services/search-condutores.service';
import { environment }                   from 'src/environments/environment';

export interface DialogData {
  idConductor: number;
  completo: boolean;
}

@Component({
  selector: 'app-modal-perfil-taxista',
  templateUrl: './modal-perfil-taxista.component.html',
  styleUrls: ['./modal-perfil-taxista.component.scss']
})
export class ModalPerfilTaxistaComponent {
  taxista: RespFichaVinculacion = {} as RespFichaVinculacion;
  get img() { return environment.apiImg  }
  get imgEmpresas() { return environment.apiImgEmpresas  }
  constructor(
    private dialogRef: MatDialogRef<ModalPerfilTaxistaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private sC: SearchCondutoresService,
  ) {
    this.cargarData();
  }
  cargarData() {
    this.sC.getPerfilConductor(this.data.idConductor).subscribe({
      next: (data: RespFichaVinculacion) => {
        this.taxista = data;
        var div = (<HTMLDivElement>document.getElementById("contenedor-scroll"));
        div.scrollTo({ top: 0, behavior: "smooth"})
      },
      error: (error: any) => {
        this.dialogRef.close();
      }
    })
  }
  descargar() {
    this.sC.descargarPdfProfile(this.data.idConductor).subscribe({
      next: (data: any) => {
        var a = document.createElement("a");
        a.href = data.file;
        a.download = data.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
      },
      error: (error: any) => {
        this.dialogRef.close();
      }
    })
  }


}
