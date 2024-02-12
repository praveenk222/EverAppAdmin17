import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';
import { AuthService } from '../../../../services/auth.service';
import { PostResult } from '../../../../models/PostResult';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  data: any;
  loginForm: FormGroup
  constructor(private _lf: FormBuilder,private route:Router,public snackBar: MatSnackBar,
     private _user: UsersService, private as: AuthService) {
    this.loginForm = this._lf.group({
      UserID: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    })
  }
  login() {
    const data = this.loginForm.value;
    console.log(data)
    if (!this.loginForm.valid) {
      return;


    } else {
      this._user.loginAdmin(data).subscribe((res: PostResult) => {
        if (res.status) {
          console.log(res)
          this.snackBar.open(res.message);
          this.as.login(res.data);
          this.route.navigateByUrl('/dashboard')
          // this.as.login(res.message)
        }
      })
    }
  }
}
