import { Component, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-customer-allbookings',
  templateUrl: './customer-allbookings.component.html',
  styleUrl: './customer-allbookings.component.css'
})
export class CustomerAllbookingsComponent {
  @Input () userid:number;
  orderList: any;
  constructor(private us:UsersService){}

  ngOnInit(){
this.us.getorderByUserID(this.userid).subscribe(res=>{
this.orderList=res;
console.log(this.orderList)
})
  }
}
