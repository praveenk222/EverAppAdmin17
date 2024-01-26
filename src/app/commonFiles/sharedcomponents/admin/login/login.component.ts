import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  data:any;
  loginForm!:FormGroup
  constructor(private _lf:FormBuilder,private _user:UsersService){
     this.loginForm=this._lf.group({
      UserID:'',
      Password:''
     })
  }
  login(){
    const data = this.loginForm.value;
    console.log(data)
    if(!this.loginForm.valid){
      alert('please enter the email and password')
    }else{
    this._user.loginAdmin(this.data).subscribe((res)=>{
      this.data =res['message']
      console.log(res)
      alert(JSON.stringify(res.message))
    })
  }
}
}
