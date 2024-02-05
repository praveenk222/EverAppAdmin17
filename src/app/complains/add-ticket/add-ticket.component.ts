import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})
export class AddTicketComponent {
  complainForm!:FormGroup;
  constructor(private cf:FormBuilder){
    this.complainForm=this.cf.group({
      CustomerName:'',
      CustomerID:'',
      Title:'',
      Description:''


    })
  }
  submitComplainForm(){
    const data=this.complainForm.value;
    console.log(data)
  }
}
