import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service';
import { environment } from '../../../environments/environment.prod';
import { ManualPaymentSuccessComponent } from '../manual-payment-success/manual-payment-success.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var Razorpay:any;
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
  constructor(private dataService: DataserviceService, private snackBar: MatSnackBar,public dialog: MatDialog,private form:FormBuilder,
    private route: ActivatedRoute, private _pd: UsersService,
    private router: Router, 
   ) {
      this.bookingNo  = route.snapshot.params["ID"];

      this.recharge=this.form.group({
        name:'',
        contact:'',
        email:'',
        product_name:'',
        amount:'',
        discription:''
      })
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

  recharge!:FormGroup;
  inputValue: number=0;
  phoneNo:String='';
  Name:String='';
  Email:String='';
  
 
submit(){
  if(this.recharge.valid){
    console.log(this.recharge.value,"success")
  }
  else{
    console.log("invaild")
  }
}
paynow(){
 const RazorpayOptions = {
  description:'Sample Razorpay Demo',
  currency:'INR',
  amount:this.inputValue*100,
  name:"ever",
  key:'rzp_test_VLSc7qRsFdhdrf',
  image:'data:image/jpeg;base64,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', 

   prefill:{
    name:this.Name,
    email:this.Email,
   

   },
   theme:{
    color:'#3498DB',
    width:'400px'
   },
   modal:{
    ondismiss: ()=>{
      console.log('dismissed')
    }
   }
 }
 const successCallback= (paymentid:any) =>{
  console.log(paymentid);
 }
 const failureCallback= (e:any) =>{
  console.log(e);
 }
 Razorpay.open(RazorpayOptions,successCallback,failureCallback)
}

onButtonClick(value: string) {
  
  this.recharge.get('amount')?.setValue(value);
}
}
