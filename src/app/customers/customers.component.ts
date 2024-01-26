import { Component, ViewChild } from '@angular/core';
import { PostResult } from '../models/PostResult';
import { CustomerService } from '../services/customer_dummy.service';
import { UsersService } from '../services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  userdata: any;
  displayedColumns: string[] = ['Customer id', 'Full name', 'Mobile no.', 'Email id', 'Registration date', 'Status', 'Remarks'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
  constructor(private customerService: CustomerService,private us:UsersService) {}

  ngOnInit() {
    this.getUsers();
  }
 async getUsers(){

  this.us.getUsers()
      .then((result:PostResult) => {
        if (result.status) {
          console.log(result.message)
          // this.router.na
          this.dataSource = result.message;
          this.dataSource.paginator = this.paginator;
        }
      })
      .catch((error) => {
       console.error(error);
      });
  }
  changePage(pageEvent: PageEvent) {
    const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
    const endIndex = startIndex + pageEvent.pageSize;
  }
}