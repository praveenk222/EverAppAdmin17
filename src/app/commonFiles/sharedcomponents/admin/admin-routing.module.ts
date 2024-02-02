import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: LoginComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
