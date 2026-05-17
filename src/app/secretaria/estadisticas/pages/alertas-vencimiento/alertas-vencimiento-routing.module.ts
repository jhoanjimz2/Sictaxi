import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertasVencimientoComponent } from './alertas-vencimiento.component';

const routes: Routes = [{ path: '', component: AlertasVencimientoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertasVencimientoRoutingModule { }
