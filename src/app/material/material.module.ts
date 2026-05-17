import { NgModule }                   from '@angular/core';
import { MatNativeDateModule }        from '@angular/material/core';
import { MatDatepickerModule }        from '@angular/material/datepicker';
import { MatFormFieldModule }         from '@angular/material/form-field';
import { MatDialogModule }            from '@angular/material/dialog';
import { MatSelectModule }            from '@angular/material/select';
import { MatPaginatorModule }         from '@angular/material/paginator';
import { MatProgressSpinnerModule }   from '@angular/material/progress-spinner';
import { MatSlideToggleModule }       from '@angular/material/slide-toggle';
import { MatMenuModule }              from '@angular/material/menu';
import { MatButtonModule }            from '@angular/material/button';
import { MatStepperModule }           from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule
  ]
})
export class MaterialModule { }
