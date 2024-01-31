import { Component } from '@angular/core';
import { DialogAddhubMatComponent } from '../../commonFiles/sharedcomponents/dialog_addhub_Mat/dialog_addhub_Mat.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addhubs',
  templateUrl: './addhubs.component.html',
  styleUrl: './addhubs.component.css'
})
export class AddhubsComponent {
  addhubForm!:FormGroup
  constructor(private dialog:MatDialog,private _aF:FormBuilder) {
    // this.openDialog()
    this.addhubForm=this._aF.group({
      BranchName:'',
      RegNo:'',
      HubCode:'',
      OpenTime:'',
      CloseTime:'',
      Location:'',
      CreatedBy:'admin',
      BranchType:0,
      IsActive:true
    })
   }
   
onSubmit(){
  
this.addhubForm.value
  const data=this.addhubForm.value;
  console.log(data)
}

  }
  var ex={
    "BranchCode": "cc",
    "BranchName": "test",
    "RegNo": "tets",
    "IsActive": true,  // Assuming a default value of true for @IsActive
    "CreatedBy": "test",
    "ModifiedBy": "test",
    "OpenTime": "12:30",  // Replace with the actual time for @OpenTime
    "CloseTime": "10:00", // Replace with the actual time for @CloseTime
    "ProfileImage": "test",
    "BranchType": 0  // Assuming a default value of 0 for @BranchType
  }
  