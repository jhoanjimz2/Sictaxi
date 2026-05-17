import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProximosVencerseComponent } from './proximos-vencerse.component';

const routes: Routes = [{ path: '', component: ProximosVencerseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProximosVencerseRoutingModule { }
