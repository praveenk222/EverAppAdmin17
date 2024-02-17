import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryService } from '../../services/Inventory.service';
import { PostResult } from '../../models/PostResult';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allvehicles',
  templateUrl: './allvehicles.component.html',
  styleUrl: './allvehicles.component.css'
})
export class AllvehiclesComponent implements OnInit {
  proudctdata :any;
  isIamages: boolean = false;
  displayedColumns: string[] = ['slno', 'productname', 'registrationno', 'hubcode','opnetime','closetime','location','status'];
   dataSource = new MatTableDataSource<any>();
   pageSizeOptions: number[] = [5, 10, 20];
   pageSize = 5; //
   @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor( private invntservice: InventoryService,private router:Router) {
  }

ngOnInit() {
  this.getbikes();
}
changePage(pageEvent: PageEvent) {
  const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
  const endIndex = startIndex + pageEvent.pageSize;
}
ngAfterViewInit(){
  // this.dataSource.paginator=this.paginator;
}
  getbikes() {
   let p_type:any=3502
    this.invntservice.getProducts(p_type)
      .then((result: PostResult) => {
        if (result.status) {
          console.log(result.message)
          // this.router.na
          this.dataSource = new MatTableDataSource<any>(result.message)
          this.dataSource.paginator = this.paginator
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  goto(){
      localStorage.setItem('actiontype','addbike')
      this.router.navigate(['/inventory/addbike/0'])
  }
}