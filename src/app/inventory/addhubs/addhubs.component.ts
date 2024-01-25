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
      HubName:'',
      Registrationno:'',
      HubCode:'',
      OpenTime:'',
      CloseTime:'',
      Location:'',

      Status:''
    })
   }
   
onSubmit(){
  const data=this.addhubForm.value;
  console.log(data)
}

  }