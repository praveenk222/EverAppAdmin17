import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PostResult } from '../models/PostResult';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AddpricedataComponent } from '../addpricedata/addpricedata.component';
import { MatDialog } from '@angular/material/dialog';
import { SweetAlertServiceService } from '../services/sweet-alert-service.service';

@Component({
  selector: 'app-bookingpricedata',
  templateUrl: './bookingpricedata.component.html',
  styleUrl: './bookingpricedata.component.css'
})
export class BookingpricedataComponent {
  orderdata:any;
  displayedColumns: string[] = ['Booking id', 'User name',  'Fare','Status','action'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5; //
constructor(private us:UsersService,private dialog:MatDialog,private sw:SweetAlertServiceService){

}

ngOnInit() {
  this.getPrice()
}
async getPrice(){

this.us.getPridcedata()
    .then((result:PostResult) => {
      if (result.status) {
        console.log(result.message)
        // this.router.na
        this.dataSource = result.message;
       
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

async delete(data:any){
  console.log(data)
  data.IsActive=false;
 const confirmed= await this.sw.showConfirmation('Delete','Are you sure want to delete the data');
 if(confirmed){

   this.us.savePrice(data).subscribe((res:any)=>{
     console.log(res)
     if(res[0].status){
      this.getPrice();
     }
   })
 }

}
edit(data:any){

  this.openReport(data)
}
openReport(data:any) {
  const dialogRef =
  this.dialog.open(AddpricedataComponent,{
    width:'360px',
    height:'300px',
    data:data
  
  })
  dialogRef.afterClosed().subscribe(_ => {
    this.getPrice();
      
  })

}
}
