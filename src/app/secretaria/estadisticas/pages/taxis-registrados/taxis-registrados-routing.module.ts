import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxisRegistradosComponent } from './taxis-registrados.component';

const routes: Routes = [{ path: '', component: TaxisRegistradosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxisRegistradosRoutingModule { }
