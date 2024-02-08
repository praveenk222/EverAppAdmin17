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
  constructor(private router:ActivatedRoute,private us:UsersService){
    this.userid= this.router.snapshot.params['id']
    this.userdetails()
}
  userdetails() {
    this.us.getadminUserdetails(this.userid).subscribe((res:any)=>{
      this.details=res['0']
      console.log(res)
    })
  }
  Details=[
    {name:'userpermission',desp:'lorem'},
    {name:'view dashboard',desp:'lorem'},
    {name:'Manage user',desp:'lorem'},
    {name:'Manage Inventory',desp:'lorem'},
    {name:'Manual booking',desp:'lorem'},
    {name:'Track vehicle location',desp:'lorem'},
    {name:'Generate Reports',desp:'lorem'},
    {name:'Customer support',desp:'lorem'},
  ]
}