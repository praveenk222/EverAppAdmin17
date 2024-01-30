import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentMatUploadComponent } from '../../commonFiles/sharedcomponents/dialog_content_Mat_Upload/dialog-content-mat-upload.component';
import { SampleModel } from '../../models/product.model';
import { InventoryService } from '../../services/Inventory.service';
import { PostResult } from '../../models/PostResult';

@Component({
  selector: 'app-addbikes',
  templateUrl: './addbikes.component.html',
  styleUrl: './addbikes.component.css'
})
export class AddbikesComponent {
  proudctdata = new SampleModel();
  isIamages: boolean = false;
  constructor(private dialog: MatDialog, private invntservice: InventoryService) {
    // this.openDialog()
    console.log(this.proudctdata)
  }

  openDialog() {
    const timeout = 2000;
    let dialogRef =
      this.dialog.open(DialogContentMatUploadComponent, {
        width: '520px',
        height: '558px'
      })
    dialogRef.afterOpened().subscribe(_ => {
      //dialogRef.close();
    })
  }
  onSubmit() {
    console.log(this.proudctdata)
    this.invntservice.saveProduct(this.proudctdata)
      .then((result: PostResult) => {
        if (result.status) {
          console.log(result.message)
          // this.router.na
          window.history.back();

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
