import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosVencidosComponent } from './documentos-vencidos.component';

const routes: Routes = [{ path: '', component: DocumentosVencidosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentosVencidosRoutingModule { }
