import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculasCanceladasComponent } from './matriculas-canceladas.component';

const routes: Routes = [{ path: '', component: MatriculasCanceladasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculasCanceladasRoutingModule { }
