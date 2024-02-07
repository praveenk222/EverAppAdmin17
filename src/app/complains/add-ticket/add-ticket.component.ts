import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})
export class AddTicketComponent {

  complainForm!:FormGroup;
  constructor(private cf:FormBuilder,private us:UsersService,private snackbar:MatSnackBar){
    this.complainForm=this.cf.group({
   
      ID: 1,
      UserID: 2,
      UserName: '',
      About: '',
      OpenDate: '',
      ClosedDate: '',
      Location: '',
      Status: true,
      CreatedOn: '2024-02-03T04:00:24.853Z',
      CreatedBy: 'admin'

    })
  }
  submitComplainForm(){
    const data=this.complainForm.value;
    console.log(data)
    this.us.postcomplain(data).subscribe((res:any)=>{
     
      console.log(res)

      this.snackbar.open(res.message)
    })
  }

}
