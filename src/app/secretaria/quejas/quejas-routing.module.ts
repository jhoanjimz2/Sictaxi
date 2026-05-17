import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuejasComponent } from './quejas.component';

const routes: Routes = [
  {
    path: '',
    component: QuejasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuejasRoutingModule { }
