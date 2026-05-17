import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { PlanesRoutingModule }    from './planes-routing.module';
import { PlanesComponent }        from './planes.component';
import { FormsModule }            from '@angular/forms';
import { PlanSelectionComponent } from './plan-selection/plan-selection.component';

@NgModule({
  declarations: [
    PlanesComponent,
    PlanSelectionComponent,
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule,
    FormsModule
  ]
})
export class PlanesModule { }
