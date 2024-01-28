import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { spinnerInterceptor } from './services/spinner.interceptor';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { DialogContentComponent } from './commonFiles/sharedcomponents/dialog-content/dialog-content.component';
import { ProfileComponent } from './commonFiles/sharedcomponents/profile/profile.component';
import { DialogModule } from 'primeng/dialog';
import { NgChartsModule } from 'ng2-charts';
import { InvoicepageComponent } from './bookinghistory/invoicepage/invoicepage.component';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { RegisterComponent } from './commonFiles/sharedcomponents/register/register.component';
import { ChangepasswordComponent } from './commonFiles/sharedcomponents/changepassword/changepassword.component';
import { ResetpasswordComponent } from './commonFiles/sharedcomponents/resetpassword/resetpassword.component';
import { LoginComponent } from './commonFiles/sharedcomponents/admin/login/login.component';
import { DialogAddPromocodeComponent } from './commonFiles/sharedcomponents/dialog-add-promocode/dialog-add-promocode.component';
import { DialogaddNotificationComponent } from './commonFiles/sharedcomponents/dialogadd-notification/dialogadd-notification.component';
import { AddthemeComponent } from './commonFiles/sharedcomponents/addtheme/addtheme.component';
import { ToastrModule } from 'ngx-toastr';
import { SuccessInterceptor } from './services/toastersuccess.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InvoicepageComponent,
    NavComponent,
    RegisterComponent,
    ChangepasswordComponent,
    ResetpasswordComponent,
    DialogAddPromocodeComponent,
    DialogaddNotificationComponent,
    AddthemeComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ToastrModule.forRoot(),
    // NgChartsModule.forRoot({ defaults: { ... } }) //for global css
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatTableModule,
    // MatPaginatorModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: spinnerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SuccessInterceptor, multi: true },
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
