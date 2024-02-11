import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service';
import { environment } from '../../../environments/environment.prod';
import { ManualPaymentSuccessComponent } from '../manual-payment-success/manual-payment-success.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manual-booking-payments',
  templateUrl: './manual-booking-payments.component.html',
  styleUrl: './manual-booking-payments.component.css'
})
export class ManualBookingPaymentsComponent {
  azimageUrl: any = environment.azimageUrl_hub;
  timeDifference = 0;
  startDate = '';
  endDate = ''
  BookingStartDate: any;
  BookingEndDate: any
  ProductDetails: any
  productId: any;
  bikeHubID: any;
  bikeHub: any;
  bookingNo: string='SWKPHB231100002';


  openDialog() {
    this.dialog.open(ManualPaymentSuccessComponent,{
      width:"520px",
      height:"358px",
      panelClass:"myclass"
    }
     

      );

   
  }
  constructor(private dataService: DataserviceService, private snackBar: MatSnackBar,public dialog: MatDialog,
    private route: ActivatedRoute, private _pd: UsersService,
    private router: Router, 
   ) {
      this.bookingNo  = route.snapshot.params["ID"];
  }
 
  ngOnInit() {
    this.getDetails()
  }
  getDetails() {
    this._pd.getordersummeryByBookingNo(this.bookingNo).subscribe((res:any) => {
      console.log(res)
      this.ProductDetails = res[0];
    })
  }
}
