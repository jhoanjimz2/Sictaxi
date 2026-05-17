import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociacionesComponent } from './asociaciones.component';

const routes: Routes = [{ path: '', component: AsociacionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociacionesRoutingModule { }
