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
          "CanAccess":true,
          "IsChanged":false
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
      let daata={
        "TabID": 0,
        "TabName": "All",
        "icon": "",
        "link": "",
        "UserID": "0",
        "Description":"User will have all the permissions and can do anything",
        "CanAccess":false,
        "IsChanged":false
      }
      this.Details.unshift(daata)
      // this.Details
      console.log('tablist',res)
    })
  }
  handleChange(event: any,item:any,i:number) {
    if (event.checked) {
    
          if(item.TabID == 0){

            this.Details.forEach(x=>x.CanAccess =true)
            this.Details.forEach(x=>x.IsChanged =true)
          }else{
            this.Details[i]['IsChanged']=true
            this.Details[i].CanAccess=true;
         

          }
      // Perform actions when checkbox is checked
    } else {
          if(item.TabID == 0){

            this.Details.forEach(x=>x.CanAccess =false)
            this.Details.forEach(x=>x.IsChanged =true)

          }else{
            this.Details[i].CanAccess=false
            this.Details[i]['IsChanged']=true
          }

      // Perform actions when checkbox is unchecked
    }
  }
  save(){
   let data=this.Details.filter(x=>x.IsChanged == true);
    this.us.saveUserTabAccess(data).subscribe(res=>{
      console.log(res)
      if(res.status){
        this.usertabdetails()
      }
    })
  }
}