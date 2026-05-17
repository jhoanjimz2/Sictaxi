import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarConductorComponent } from './agregar-conductor.component';

const routes: Routes = [{ path:'', component: AgregarConductorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarConductorRoutingModule { }
