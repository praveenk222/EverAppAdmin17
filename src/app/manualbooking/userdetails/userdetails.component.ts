import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
// import { IonContent } from '@ionic/angular';

// import { ToastController } from '@ionic/angular';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service';
import { DataserviceService } from '../../dataservice.service';
// import { LoadingService } from 'src/Services/services/loading.service';
// import { UserData } from 'src/providers/user-data';
// import { RegisterService } from 'src/Services/registration-services/register.service';
// import { ValidateUrl } from './age.validator';
// import { SnackbarService } from 'src/Services/snackbar.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  showLoader!: boolean;
  message: any;
  UserID: any;
  duration: any;
  maxDate!: Date;
  date!: Date;
  readonly minAge = 18;
  submitted = false;
 
  genderdata:any=[
    {"name":'Select',"value":0},
    {"name":'Male',"value":3500},
    {"name":'Female',"value":3500},
    {"name":'Prefer not say',"value":1},
  ]

  constructor(
    private router: Router, private userdata: DataserviceService, private _snackBar: MatSnackBar
   , private snackBar: MatSnackBar , private route: ActivatedRoute,
    private _rf: FormBuilder, private reg: UsersService,
    ) {


    this.regForm = this._rf.group({
      FirstName: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z \-\']+')])],
      LastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      EmailID: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.email])],
      country: '+91',
      MobileNo: ['', [Validators.required, this.mobileNumberValidator]],
      DateofBirth: ['', [Validators.compose([Validators.required])]],
      Password: '12345',
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

    
  }

  // get f() { return this.regForm.controls; }

  // openDialog() {
  //   const dialogRef = this.dialog.open(CommunicationAllowPermissionComponent,
  //   );

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);

  //   });
  // }
  regForm!: FormGroup;
  data: any
  user: any;
  loggedIn: any;
  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() - 12 * 18);


  }

  mobileNumberValidator(control:any) {
  const isValid =/^\d{10}$/.test(control.value);  
 
  return isValid ? null : {invalidMobile: true };
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  // onSubmit(){
  //   if(this.regForm.valid){
  //  console.log(this.regForm.value)
  //   }
  // }

  isChecked: boolean = false;

  onChange(event: any) {
    this.isChecked = true;
  }
  register() {
    
  
    // if (!this.regForm.valid) {

    //   this.regForm.markAllAsTouched();
    //   this.snackBar.open(" All fields are required ");
    //   return;
    // }
 
    // const picname = this.regForm.get('FirstName')!.value + '_' + this.regForm.get('LastName')!.value;
    // this.regForm.controls['ProfilePhoto'].setValue(picname);
    // this.regForm.value.MobileNo = (this.regForm.value.MobileNo).toString()
    // const data = this.regForm.value;

    this.reg.signup(this.regForm.value).subscribe(
      (res: any) => {
        // if (res) {

        //   if (res.status == 'true') {
          
            console.log(res)
            this.data = res;
            this.snackBar.open(res.message.toString());
           

            this.router.navigate(['/login'])
    //       } else {
        




    //       }
    //     } else {
        

    //     }

    //   }, (error:any) => {
       

      }
    )


  }



  submit() {

    if (this.regForm.valid) {
      // this.showLoader();


    }
    else {
      this.regForm.markAllAsTouched();
    }
  }

}
