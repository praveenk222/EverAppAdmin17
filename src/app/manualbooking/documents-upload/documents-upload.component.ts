import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment.prod';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
interface Food {
  value: string;
  viewValue: number;
  lable:string;
}

@Component({
  selector: 'app-documents-upload',
  templateUrl: './documents-upload.component.html',
  styleUrl: './documents-upload.component.css'
})
export class DocumentsUploadComponent {
  azimageUrl: any = environment.azimageUrl_hub;


regForm!:FormGroup;
  data: any;
  bikeHubID: any;
  bikeHub: any;
  bookingNo: string ="SWKPHB231100002";
constructor(private _rf:FormBuilder,private snackBar: MatSnackBar,private reg:UsersService,private router:Router,private dataService: DataserviceService,private datePipe:DatePipe,private route:ActivatedRoute){


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
isshow:boolean=false;



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
 
  }
  


  getDetails() {
    this.reg.getordersummeryByBookingNo(this.bookingNo).subscribe((res:any) => {
      console.log(res)
      this.ProductDetails = res;
    })
  }
  private trigger: Subject<any> = new Subject();
  webcamImage: any;
  private nextWebcam: Subject<any> = new Subject();

  sysImage = '';


  public getSnapshot(): void {
    this.trigger.next(void 0);
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    console.info('got webcam image', this.sysImage);
  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
    this.isshow=true
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
}
