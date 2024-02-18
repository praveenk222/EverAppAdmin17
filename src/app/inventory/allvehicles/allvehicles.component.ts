import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryService } from '../../services/Inventory.service';
import { PostResult } from '../../models/PostResult';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RemainingbikesComponent } from './remainingbikes/remainingbikes.component';

@Component({
  selector: 'app-allvehicles',
  templateUrl: './allvehicles.component.html',
  styleUrl: './allvehicles.component.css'
})
export class AllvehiclesComponent implements OnInit {
  @ViewChild(RemainingbikesComponent) remainingbikesComponent: RemainingbikesComponent;
  selectedTabIndex: number;
  loadData: boolean[] = [false, false,false]; // Array to track whether data should be loaded for each tab

  proudctdata :any;
  isIamages: boolean = false;
  displayedColumns: string[] = ['slno', 'productname', 'registrationno', 'hubcode','opnetime','closetime','location','status'];
   dataSource = new MatTableDataSource<any>();
   pageSizeOptions: number[] = [5, 10, 20];
   pageSize = 5; //
   @ViewChild(MatPaginator) paginator!: MatPaginator;
  childData: any;
  constructor( private invntservice: InventoryService,private router:Router) {
  }

ngOnInit() {
  this.getbikes();
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
          this.dataSource.paginator = this.paginator;
          this.childData=result.message
        
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
  tabChanged(index: number): void {
    this.selectedTabIndex = index;
    if (!this.loadData[index]) {
      this.loadData[index] = true; // Set flag to true to load data for this tab
      // Load data for the tab
      // this.loadDataForTab(index);
    }

    let filterdata:any
    switch (index) {
      case 1:
        filterdata=this.childData.filter((x:any)=>x.IsAvailable == false)
        this.loadDataForTab(1,filterdata)  
        break;
      case 2:
         filterdata=this.childData.filter((x:any)=>x.IsAvailable == true)
        this.loadDataForTab(2,filterdata)        
        break;
      case 3:
         filterdata=this.childData.filter((x:any)=>x.Quntity == 0)
        this.loadDataForTab(3,filterdata)      
        break;
    
      default:
        break;
    }
    
  }
  loadDataForTab(tabIndex: number,data:any): void {
    // Call a method on the selector component to load data
    if (this.remainingbikesComponent) {
      this.remainingbikesComponent.loadData(data);
    }
  }
}