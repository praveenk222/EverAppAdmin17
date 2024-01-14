import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PostResult } from '../models/PostResult';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrl: './bookinghistory.component.css'
})
export class BookinghistoryComponent {
  orderdata:any;
constructor(private us:UsersService){

}

ngOnInit() {
  this.getOrders();
}
async getOrders(){

this.us.getOrders()
    .then((result:PostResult) => {
      if(result.status){

        this.orderdata = result.message;
      }
    })
    .catch((error) => {
     console.error(error);
    });
}
}