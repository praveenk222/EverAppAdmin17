import { Component, ViewChild } from '@angular/core';
import { PostResult } from '../../models/PostResult';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-all-ebike-booking',
  templateUrl: './all-ebike-booking.component.html',
  styleUrl: './all-ebike-booking.component.css'
})
export class AllEbikeBookingComponent {
  orderdata:any;
  displayedColumns: string[] = ['Booking id', 'User name', 'Mobile no.', 'Booking Date', 'Station Location', 'Wash time','Fare','Status','Reviews & ratings'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
constructor(private us:UsersService){

}

ngOnInit() {
  let biketype=3506
  this.getOrders(biketype);
}
async getOrders(id:number){

this.us.getOrders(id)
    .then((result:PostResult) => {
      if (result.status) {
        console.log(result.message)
        // this.router.na
        this.dataSource = result.message;
       
      }
    })
    .catch((error:any) => {
     console.error(error);
    });
}

changePage(pageEvent: PageEvent) {
  const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
  const endIndex = startIndex + pageEvent.pageSize;
}
}
