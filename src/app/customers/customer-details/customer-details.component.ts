import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  userid:number=0;
  userdetails: any;
constructor(public location: Location,private router:ActivatedRoute,private us:UsersService){
 this.userid= this.router.snapshot.params['id']
  
}
ngOnInit(){
  this.getMemberDetails()
}
getMemberDetails(){
  this.us.getMemberDetails(this.userid).subscribe((res:any)=>
    {
      if(res){
        this.userdetails=res;
        console.log(this.userdetails)
      }
    }
  )
}
}
