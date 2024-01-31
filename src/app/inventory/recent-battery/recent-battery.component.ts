import { Component, ViewChild } from '@angular/core';
import { PostResult } from '../../models/PostResult';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { InventoryService } from '../../services/Inventory.service';

@Component({
  selector: 'app-recent-battery',
  templateUrl: './recent-battery.component.html',
  styleUrl: './recent-battery.component.css'
})
export class RecentBatteryComponent {

  proudctdata :any;
  isIamages: boolean = false;
  constructor( private invntservice: InventoryService) {
  }

ngOnInit() {
  this.getbattry();
}

getbattry() {
  let p_type:any=3503
   this.invntservice.getProducts(p_type)
     .then((result: PostResult) => {
       if (result.status) {
         console.log(result.message)
         // this.router.na
         this.proudctdata=result.message;

       }
     })
     .catch((error) => {
       console.error(error);
     });
 }

}
