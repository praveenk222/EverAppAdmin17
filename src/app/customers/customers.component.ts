import { Component } from '@angular/core';
import { PostResult } from '../models/PostResult';
import { CustomerService } from '../services/customer.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  userdata!: any;
  constructor(private customerService: CustomerService,private us:UsersService) {}

  ngOnInit() {
    this.getUsers();
  }
 async getUsers(){

  this.us.getUsers()
      .then((result:PostResult) => {
        this.userdata = result.message;
      })
      .catch((error) => {
       console.error(error);
      });
  }
}