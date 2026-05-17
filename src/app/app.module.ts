import { NgModule }                            from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser';

import { AppRoutingModule }                    from './app-routing.module';
import { AppComponent }                        from './app.component';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';
import { SharedModule }                        from './shared/shared.module';
import { ModalsModule }                        from './modals/modals.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService }              from './services/auth-interceptor.service';
import { WebcamModule }                        from 'ngx-webcam';
import { IConfig, NgxMaskModule }              from 'ngx-mask';
import { MaterialModule }                      from './material/material.module';


const maskConfig = {
  validation: false,
  thousandSeparator: '',
  showMaskTyped: true,
  clearIfNotMatch: false,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ModalsModule,
    HttpClientModule,
    WebcamModule,
    NgxMaskModule.forRoot(maskConfig),
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
