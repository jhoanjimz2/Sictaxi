import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxistasSinRefrendarComponent } from './taxistas-sin-refrendar.component';

const routes: Routes = [{ path: '', component: TaxistasSinRefrendarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxistasSinRefrendarRoutingModule { }
