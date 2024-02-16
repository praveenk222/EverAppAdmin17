import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {
changeForm!:FormGroup;
constructor(private pf:FormBuilder,private us:UsersService){
  this.changeForm=this.pf.group({
    mail:""
  })
}
sendmail(){
  const data=this.changeForm.value;
  this.us.sendmail(data).subscribe((res)=>{
    console.log(res)
  })
}
}

