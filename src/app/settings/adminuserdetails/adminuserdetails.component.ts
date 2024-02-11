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
  details:any;
  hide:boolean=true;
  Details=[
    
      {
          "TabID": 1,
          "TabName": "Dashboard",
          "icon": "home",
          "link": "/dashboard",
          "UserID": "100",
          "Description":"Test",
          "CanAccess":1
      },
      {
          "TabID": 2,
          "TabName": "Booking History",
          "icon": "bookmark",
          "link": "/bookinghistory",
          "UserID": "100",
          "CanAccess":1

      },
    
     
  
  ]
  constructor(private router:ActivatedRoute,private us:UsersService){
    this.userid= this.router.snapshot.params['id']
    this.userdetails()
    this.usertabdetails();
}
  userdetails() {
    this.us.getadminUserdetails(this.userid).subscribe((res:any)=>{
      this.details=res[0]
      console.log(res)
    })
  }
  usertabdetails() {
    this.us.getNavById(this.userid).subscribe((res:any)=>{
      this.Details=res;
      console.log(res)
    })
  }
  
}