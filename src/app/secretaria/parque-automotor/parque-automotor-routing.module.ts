import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParqueAutomotorComponent } from './parque-automotor.component';

const routes: Routes = [
  {
    path: '',
    component: ParqueAutomotorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParqueAutomotorRoutingModule { }
