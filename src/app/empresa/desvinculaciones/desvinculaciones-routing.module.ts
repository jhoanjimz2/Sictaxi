import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesvinculacionesComponent } from './desvinculaciones.component';

const routes: Routes = [{ path: '', component: DesvinculacionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesvinculacionesRoutingModule { }
