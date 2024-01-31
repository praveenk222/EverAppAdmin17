import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-manual-booking-payments',
  templateUrl: './manual-booking-payments.component.html',
  styleUrl: './manual-booking-payments.component.css'
})
export class ManualBookingPaymentsComponent {
  timeDifference = 0;
  startDate = '';
  endDate = ''
  BookingStartDate: any;
  BookingEndDate: any
  ProductDetails: any
  productId: any;
  bikeHubID: any;
  bikeHub: any;
  bookingNo: string='BKEV-01231100008';
  
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
    this._pd.getorder(this.bookingNo).subscribe((res) => {
      console.log(res)
      this.ProductDetails = res[0];
    })
  }
}
