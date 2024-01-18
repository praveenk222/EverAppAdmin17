import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { spinnerInterceptor } from './services/spinner.interceptor';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { DialogContentComponent } from './commonFiles/sharedcomponents/dialog-content/dialog-content.component';
import { SidenavComponent } from './commonFiles/sharedcomponents/sidenav/sidenav.component';
import { ProfileComponent } from './commonFiles/sharedcomponents/profile/profile.component';
import { DialogModule } from 'primeng/dialog';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgChartsModule.forRoot({ defaults: { ... } }) //for global css
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: spinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
