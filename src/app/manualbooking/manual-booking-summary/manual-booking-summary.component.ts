import { Component } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-manual-booking-summary',
  templateUrl: './manual-booking-summary.component.html',
  styleUrl: './manual-booking-summary.component.css'
})
export class ManualBookingSummaryComponent {
  bookingNo: any;
  ProductDetails: any;
  constructor(private dataService: DataserviceService, private snackBar: MatSnackBar,
    private route: ActivatedRoute, private _pd: UsersService,
    private router: Router, 
   ) {
      this.bookingNo  = route.snapshot.params["ID"];

   
  }
  ngOnInit() {
    this.getDetails()
  
  }
  getDetails() {
    this._pd.getBookingndUserSummaryByBookingID(this.bookingNo).subscribe((res:any) => {
      console.log(res)
      this.ProductDetails = res
    })
  }
}
