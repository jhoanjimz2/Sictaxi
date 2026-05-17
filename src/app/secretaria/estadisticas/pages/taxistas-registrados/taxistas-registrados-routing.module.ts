import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxistasRegistradosComponent } from './taxistas-registrados.component';

const routes: Routes = [{ path: '', component: TaxistasRegistradosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxistasRegistradosRoutingModule { }
