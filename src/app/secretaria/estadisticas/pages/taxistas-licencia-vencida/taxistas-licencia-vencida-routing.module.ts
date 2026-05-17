import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxistasLicenciaVencidaComponent } from './taxistas-licencia-vencida.component';

const routes: Routes = [{ path: '', component: TaxistasLicenciaVencidaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxistasLicenciaVencidaRoutingModule { }
