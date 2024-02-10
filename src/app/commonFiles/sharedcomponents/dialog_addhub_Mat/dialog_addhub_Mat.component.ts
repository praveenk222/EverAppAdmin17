import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BranchModal } from '../../../models/product.model';
import { InventoryService } from '../../../services/Inventory.service';
import { PostResult } from '../../../models/PostResult';
import { FormsModule, NgForm } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-dialog-addhub-mat',
  templateUrl: './dialog_addhub_Mat.component.html',
  standalone:true,
  imports:[FormsModule],
  styleUrl: './dialog_addhub_Mat.component.css'
})
export class DialogAddhubMatComponent {
 hubmodal!: BranchModal ;
  constructor(private dialogRef: MatDialogRef<DialogAddhubMatComponent>,  @Inject(MAT_DIALOG_DATA) public data: any
  ,private us:UsersService) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  saveHub(){

// this.i_service.saveHub(data)
//   .then((result: PostResult) => {
//     if (result.status) {
//       console.log(result.message)
//       // this.router.na
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Form is valid, handle submission
      form.value['CreatedBy']='admin'
      form.value['CreatedBy']='admin'
      form.value['IsActive']=true
      console.log(form.value);
      this.us.savehub(form.value).subscribe(res=>{
        console.log(res)

      })
    } else {
      // Form is invalid, display errors
      console.log("Form is invalid");
    }

  }
}


