import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-manual-booking-user-booking-summary',
  templateUrl: './manual-booking-user-booking-summary.component.html',
  styleUrl: './manual-booking-user-booking-summary.component.css'
})
export class ManualBookingUserBookingSummaryComponent {
  bookingNo: string='SWKPHB231100002';
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
