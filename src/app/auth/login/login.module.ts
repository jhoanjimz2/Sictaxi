import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { SliderComponent } from './components/slider/slider.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetComponent } from './components/reset/reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    SliderComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PipesModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
