import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import { DatePipe } from '@angular/common';
interface Food {
  value: string;
  viewValue: number;
  lable:string;
}
@Component({
  selector: 'app-manual-booking-usersdetails',
  templateUrl: './manual-booking-usersdetails.component.html',
  styleUrl: './manual-booking-usersdetails.component.css'
})
export class ManualBookingUsersdetailsComponent {
regForm!:FormGroup;
  data: any;
constructor(private _rf:FormBuilder,private snackBar: MatSnackBar,private reg:UsersService,private router:Router,private dataService: DataserviceService,private datePipe:DatePipe){
  this.regForm = this._rf.group({
    FirstName: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z \-\']+')])],
    LastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
    EmailID: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.email])],
    country: '+91',
    MobileNo: ['', [Validators.required, ]],
    DateofBirth: ['', [Validators.compose([Validators.required]), ]],
    Password: ['12345', Validators.compose([Validators.required])],
    MemberType: "0",
    OTP: '146789',
    IsOTPSent: 'true',
    OTPSentDate: '2023-09-06T14:20:44.670Z',
    IsResendOTP: 'true',
    IsEmailVerified: 'true',
    IsOTPVerified: 'true',
    CreatedOn: '2023-09-06T01:50:47.117Z',
    Token: 'null',
    ParentID: '1000',
    IsRegisteredByMobile: 'true',
    ProfilePhoto: null,
    userId: 0,
    Gender: 1000
  })
  this.personalForm = this._rf.group({
    adharno: ['', Validators.required],
    adharfile: ['',],
    licenseno: ['', Validators.required],
    licensefile: ['',],
    panno: ['', Validators.required],
    panfile: ['',]
  })
  this.customDate = this._rf.group({
    date: ['', Validators.required],
    time: ['', Validators.required]
  })

  this.totalHours = this.convertToHours(this.Number);
  this.totalHours = this.convertToHoursin(this.Number);

  this.dataService.combinedData$.subscribe(data => {
    if (data) {
      this.startDate = data.inputValue;
      this.endDate = data.inputValue1;
      const startTime = new Date(this.startDate).getTime();
      const endTime = new Date(this.endDate).getTime();
      if (!isNaN(startTime) && !isNaN(endTime)) {
        const difference = Math.abs(endTime - startTime);

        // Calculate days, hours, minutes, seconds
        const days = Math.floor(difference / (1000 * 3600 * 24));
        const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));

        const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const ammount = Math.floor(hours * 20);
        // Construct the time difference string
        this.timeDifference = `${days} days,${hours} hours `;
        this.Amount = `${ammount}`
      }
    }
  })
}

register() {
    
 
  if (!this.regForm.valid) {

    this.regForm.markAllAsTouched();
    this.snackBar.open(" All fields are required ");
    return;
  }

  const picname = this.regForm.get('FirstName')!.value + '_' + this.regForm.get('LastName')!.value;

  this.regForm.value.MobileNo = (this.regForm.value.MobileNo).toString()
  const data = this.regForm.value;

  this.reg.signup(data).subscribe(
    (res: any) => {
      if (res) {

        if (res.status == 'true') {
    
          console.log(res)
          this.data = res;
          this.snackBar.open(res.message.toString());
        

          this.router.navigate(['/login'])
        } else {
        

   



        }
      } else {
       

      }

    }, (error) => {
 

    }
  )


}


personalForm!: FormGroup;
isAdhar: boolean = false
isvoter: boolean = false;
islicence: boolean = false
isAdharFile: boolean = false
isDRFIle: boolean = false;
isPanFile: boolean = false
isDialogOpen!: boolean;
adhar: any[] = [];
licence: any[] = [];
voter: any[] = [];
frontA: any;
BackA: any;
isFrontA = false;
isBackA = false;
isAllFIles: boolean = false;




onAdharSelected(event: any, filename: any) {
  const file: File = event.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append(filename, file);
    if (this.adhar.length <= 0 || this.adhar[0].adharFront == undefined) {
      this.adhar.push({ "adharFront": file.name })
      this.isFrontA = true;
      this.frontA = this.adhar[0].adharFront;
      this.filedata.AadharImage = this.frontA;
      console.log(this.adhar)
      console.log(this.frontA)
      // this.uploadtoBackend(file, filename)
    }
    else if (this.adhar.length > 0 && this.adhar.length < 2) {
      this.adhar.push({ "adharBack": file.name })
      this.BackA = this.adhar[1].adharBack
      this.filedata.AadharImage = this.frontA;

      this.isBackA = true;
      console.log(this.adhar)
      this.isAdharFile = true;
      //this.uploadtoBackend(file, filename)
    }

  }
}
onLicenseSelected(event: any, filename: any) {
  const file: File = event.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append(filename, file);
    console.log(file.name)
    if (this.licence.length === 0 ) {
      this.licence.push({ "licenceFront": file.name })
      this.filedata.DRImage = file.name;

      console.log(this.licence[0].licenceFront)
      // this.uploadtoBackend(file, filename)
    }
    else if (this.licence.length > 0 && this.licence.length < 2) {
      this.licence.push({ "licenceBack": file.name })
      this.filedata.DRImageB = file.name;
      this.isDRFIle = true;
      //this.uploadtoBackend(file, filename)
    }
  }
}

onPanSelected(event: any, filename: any) {
  const file: File = event.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append(filename, file);
    console.log(file.name)
    if (this.voter.length === 0) {
      this.voter.push({ "voterFront": file.name })
      this.filedata.PANImage = file.name;

      // this.uploadtoBackend(file, filename)
    }
    else if (this.voter.length > 0 && this.voter.length < 2) {
      this.voter.push({ "voterBack": file.name })
      this.filedata.PANImageB = file.name;
      this.isPanFile = true;
      console.log(this.voter)
      //this.uploadtoBackend(file, filename)
      if (this.isAdharFile && this.isPanFile && this.isDRFIle) {
        this.isAllFIles = true;
      }
    }
  }
}
uploadtoBackend(file: any, fileName: any) {
  var formdata = new FormData();
  formdata.append("file", file);
  formdata.append("userid", "1000");
  formdata.append("filetype", "voter");
  // setTimeout(() => {
  //   this.loaderService.display(false);
  // }, 800);


  this.reg.uploadFile(file, '1000', fileName).subscribe(
    (response:any) => {
      // this.loaderService.display(true);
      if (response.status) {

        switch (fileName) {
          case 'adhar':
            this.isAdhar = true;
            this.isvoter = true;
            this.islicence = true;
            break;
          // case 'licence':
          //   this.islicence = true;
          //   break;

          // case 'voter':
          //   this.isvoter = true
          //   break;

          default:
            break;
        }
        this.snackBar.open(`File uploaded successfully`);
      }
    })
}
removeAdhar(index: number): void {
  this.adhar.splice(index, 1);
  console.log(this.adhar)
}
removeFrontA(): void {
  this.frontA = null;
  this.adhar.splice(0, 1);
  console.log(this.adhar)
}

removeBackA(): void {
  this.isBackA = false;
  this.BackA = null;
  this.adhar.splice(1, 1);
  console.log(this.adhar)
}

gotonext() {

  // if (!this.isAllFIles) {
  //   this.snackbar.open('Please Upload All Files');
  //   return
  // }

  // console.log(this.filedata)
  // this._rf.saveDocuments(this.filedata).subscribe((res:any)=>{
  // console.log(res)
  // if(res.Status== "true"){
 

  // }else{

  // }
  // })
}

filedata: any =
  {
    "UserID": 0,
    "AadharNo": "",
    "PAN": "",
    "DR": "",
    "AadharImage": null,
    "AadharImageB": null,
    "PANImage": null,
    "PANImageB": null,
    "DRImage": null,
    "DRImageB": null,
    "BankName": "Example Bank",
    "BankAccountNo": "1234567890",
    "IFSC": "ABCD0123456",
    "BankAccountType": 100,
    "IsActive": true

  }
  startDate: any;
  endDate: any;
  Amount: any;
  customDate!: FormGroup;
  productId: any =null;
  Number!: number;
  ProductDetails: any
  totalHours!: number;
  taskId: any;
  timeDifference: any
  selectedValue!: string;
  selectedValue1!: string;
  selectoptionThree: any;
  selectoptionTwo: any=null;
  selectoptionone: any;
 
  foods1: Food[] = [
    { value: 'Foam wash premium', viewValue: 0,lable:'Free' },
    { value: 'Water Wash ', viewValue: 49 ,lable: '₹49'},

  ];
  logindata: any;
  isSolt: boolean = false;
  toppingList1!: number[];
  hourlyRate = 10; // Example hourly rate
  dailyRate = 240; // Example daily rate
  weeklyRate = 1680;
  BookingID:any;
  priceData: any;
  washtype:any=0;
  securitydeposit: number=0;
  ispopupclosed:boolean=false;
  isModelOpen:boolean=false;
   modal:boolean=false;




  //price
  price: number = 10
  toppingList: string[] = ['hours', 'days', 'weeks'];
  ngOnInit() {
    this.toppingList1 = this.numberdata.data;

    this.dataService.combinedData$.subscribe((data:any) => {
      if (data) {
        this.startDate = data.inputValue;
        this.endDate = data.inputValue1;
        const startTime = new Date(this.startDate).getTime();
        const endTime = new Date(this.endDate).getTime();
        if (!isNaN(startTime) && !isNaN(endTime)) {
          const difference = Math.abs(endTime - startTime);

          // Calculate days, hours, minutes, seconds
          const days = Math.floor(difference / (1000 * 3600 * 24));
          const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));

          const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          const ammount = Math.floor(hours * 20);
          // Construct the time difference string
          this.timeDifference = `${days} days,${hours} hours `;
          this.Amount = `${ammount}`
        }
      }
    })
    this.GetPriceData()
  }
  GetPriceData() {
   this.reg.getPriceData().subscribe((res:any)=>{
    this.priceData=res;
    this.dailyRate=this.priceData.filter((x:any)=>x.PayTypes == 'day')[0].Amount
    this.weeklyRate=this.priceData.filter((x:any)=>x.PayTypes == 'week')[0].Amount
    this.hourlyRate=this.priceData.filter((x:any)=>x.PayTypes == 'hour')[0].Amount
    console.log('daily rate',this.dailyRate)
    console.log('week rate',this.weeklyRate)
    console.log('hour rate',this.hourlyRate)
   })
  }
  duration() {
    this.ordersaveData.ProductID = this.productId;
    console.log(this.ordersaveData)
  }

  Data = [];


  onFirstButtonClick(data: number) {
    this.startDate = ''
    this.endDate=''
    this.convertedCash = 0
    const currentDate = new Date();
    this.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
    // console.log('Start Date and Time:', startdate);
    // adding time slot to the current time
    currentDate.setHours(currentDate.getHours() + data);
    this.endDate= this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
    // console.log('End Date and Time:', enddate);
    this.selectoptionone = data;
    this.convertedCash = Math.floor(data * this.price)

  }
  onStartTimeChange(e:any){
    console.log(e.target.value);
    this.startDate = this.datePipe.transform(e.target.value, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
    // console.log('Start Date and Time:', startdate);
  }
  onEndTimeChange(e:any){
    this.convertedCash = 0
    this.endDate= this.datePipe.transform(e.target.value, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
    const startTime = new Date(this.startDate).getTime();
  const endTime = new Date(this.endDate).getTime();
  if (!isNaN(startTime) && !isNaN(endTime)) {
    const difference = Math.abs(endTime - startTime);

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 3600 * 24));
    const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));

    const ammount = Math.floor(hours * 20);
    // Construct the time difference string
    this.timeDifference = `${days} days,${hours} hours `;
    let dayprice = days * this.dailyRate + hours * this.hourlyRate;
    this.convertedCash = dayprice
  }
  }
  onSecondButtonClick() {
    if(this.selectoptionTwo == null){
      this.snackBar.open('Pleasect Select Time First!!!');
      return;
    }
   

    if (this.selectoptionThree === 'hours') {
      this.convertedCash = this.selectoptionTwo * this.hourlyRate;
      const currentDate = new Date();
      this.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('start Date and Time:', this.startDate);
      currentDate.setHours(currentDate.getHours() + parseInt(this.selectoptionTwo));
      this.endDate= this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('End Date and Time:', this.endDate);
    } else if (this.selectoptionThree === 'days') {
      const currentDate = new Date();
      this.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('start Date and Time:', this.startDate);

      currentDate.setDate(currentDate.getDate() + parseInt(this.selectoptionTwo));
      this.endDate= this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('End Date and Time:', this.endDate);

      //price
      this.convertedCash = this.selectoptionTwo * this.dailyRate;
    } else if (this.selectoptionThree === 'weeks') {
      this.convertedCash = this.selectoptionTwo * this.weeklyRate;

      const currentDate = new Date();
      this.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('start Date and Time:', this.startDate);

      currentDate.setDate(currentDate.getDate()+(parseInt(this.selectoptionTwo) * 7));
      this.endDate= this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('End Date and Time:', this.endDate);

      //price
    } else {
      this.convertedCash = 0; // Handle unexpected selections
    }
  }
  convertToHours(weeks: number): number {
    const hoursInDay = 24;
    const hoursInWeek = hoursInDay * 7;

    const totalHours = (weeks * hoursInWeek);
    console.log('totalhours in a 5weeks ' + totalHours)
    return totalHours;
  }
  convertToHoursin(day: number): number {
    const hoursInDay = 24;

    const totalHours = (day * hoursInDay);
    console.log('total hours ' + totalHours)
    return totalHours;
  }
  amount: number = 0; // Input amount
  convertedCash: number  = 0; // Converted cash value




 //last line
 book() {
if(!this.customDate.valid){
  this.customDate.markAllAsTouched();
  this.snackBar.open(" All fields are required ");
}else{

  // this.router.navigateByUrl('/adhar');

   if (this.isSolt) {
     this.customDate.markAllAsTouched();
     this.snackBar.open(" Please Select A Slot!!!");
   } else {
    
     this.ordersaveData.ProductID = this.productId;
     this.ordersaveData.BookingStartDate = this.startDate;
     this.ordersaveData.BookingEndDate = this.endDate;
     this.ordersaveData.SecurityAmount=this.securitydeposit
     this.ordersaveData.WashAmount=this.washtype
     this.ordersaveData.BookingAmount =this.convertedCash
     this.ordersaveData.AdvanceAmount=0
     this.ordersaveData.PaidAmount=0;
     this.ordersaveData.TotalAmount=0;
    //  if(this.productId == null ){
    //    this.snackBar.open("Please Select a Product")
    
 
    //    return;
    //  }
 
 
     this.reg.book(this.ordersaveData).subscribe(
       (res: any) => {
        if(res ){

         
// if(!res.Id){
//   this.snackBar.open('booking failed');

// }
          // this.BookingID = res.ID
         
          this.snackBar.open(JSON.stringify(res.message));
          this.router.navigateByUrl('/paymentdetails/'+this.BookingID);
        }else{
      
        }
        // this.dialog.open(CompletekycComponent);
        // this.router.navigateByUrl('/adhar');
       },
       (error)=>{
  
         this.snackBar.open('booking failed');
         
       }
     )
   }
  }
}



  //#region dummy data
  ordersaveData = {
    "OrderID": 123,
    "ProductID": 0,
    "BookingStartDate": null,
    "BookingEndDate": null,
    "IsActive": true,
    "BookingNo": "ABC123",
    "HubID": 0,
    "MemberID": 0,
    "BookingStatus": 2,
    "AddressID": 0,
    "BookingAmount": 0,
    "AdvanceAmount": 0,
    "DiscountAmount": 0,
    "TaxAmount": 0,
    "TotalAmount": 0,
    "PaidAmount": 0,
    "IsCancel": false,
    "Remarks": "Bike Booking",
    "CreatedOn": "2023-11-28T00:30:42",
    "DeliveredOn": "2023-11-30T00:30:42",
    "PaymentConfirmedOn": null,
    "IsFullPaid":0,
    "WashAmount":0,        
    "SecurityAmount":0,
    "CouponID":0,
    "ServiceType":3507
  }

  numberdata = {
    'data': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  }
  //# sample data

}
