import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user:any;
constructor(private as:AuthService,private router:Router){
 this.user= this.as.getCurrentUser()
  console.log(this.as.getCurrentUser())
}
logout(){
  this.as.logout();
  this.router.navigateByUrl('/')
}
}
