import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-adminuserdetails',
  templateUrl: './adminuserdetails.component.html',
  styleUrl: './adminuserdetails.component.css'
})
export class AdminuserdetailsComponent {
  userid: any;
  hide:boolean=true;
  constructor(private router:ActivatedRoute,private us:UsersService){
    this.userid= this.router.snapshot.params['id']
    this.userdetails()
}
  userdetails() {
    this.us.getadminUserdetails(this.userid).subscribe(res=>{
      console.log(res)
    })
  }
}