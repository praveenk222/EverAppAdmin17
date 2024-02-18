import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentMatUploadComponent } from '../../commonFiles/sharedcomponents/dialog_content_Mat_Upload/dialog-content-mat-upload.component';
import { SampleModel } from '../../models/product.model';
import { InventoryService } from '../../services/Inventory.service';
import { PostResult } from '../../models/PostResult';
import { SubjectService } from '../../services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SweetAlertResult } from 'sweetalert2';
import { SweetAlertServiceService } from '../../services/sweet-alert-service.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-addbikes',
  templateUrl: './addbikes.component.html',
  styleUrl: './addbikes.component.css'
})
export class AddbikesComponent {
  proudctdata = new SampleModel();
  isIamages: boolean = false;
  hubList: any;
  LookupData: any;
  ID:number;
  isview:boolean=true;
  azimageUrl: any = environment.azimageUrl_hub;

  btntype:string='Save Changes'
  actiontype: string | null;
  constructor(private dialog: MatDialog, private invntservice: InventoryService,private location:Location,
    private shareds:SubjectService,private routes:ActivatedRoute,private swal:SweetAlertServiceService
    ) {
      this.ID=this.routes.snapshot.params['id']
      this.actiontype=localStorage.getItem('actiontype');
      if(this.actiontype == 'view'){
        this.isview=!this.isview

      }
      //addbike
      // localStorage.setItem('actiontype','edit')
      // localStorage.setItem('pagetype','bike')
      if(this.ID == 0){
        this.btntype='Save Changes'
      }else{
        this.btntype='Update Changes'
        this.getBikedetails()

      }
    this.shareds.fetchLookup(); // Fetch data if null
    this.shareds.Lookupdata$.subscribe(data => {
      let res=data.message
      if(res){

        this.LookupData=res.filter((x:any)=>x.LookupCategory =='BikeCondition');
      }
    });
    this.shareds.fetchMasterData(); // Fetch data if null
    this.shareds.data$.subscribe(data => {
     this.hubList=data.message;
    });

  }
getBikedetails(){
  this.invntservice.getProductdetails(this.ID).subscribe((res:any)=>{
    this.proudctdata=res;
    console.log(res)
  })
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
    if(this.actiontype == 'addbike'){
      this.proudctdata.ProductType=3507

    }else{
      this.proudctdata.ProductType=3508

    }
    this.invntservice.saveProduct(this.proudctdata)
      .then((result: PostResult) => {
        if (result.status) {
          console.log(result.message)
          this.swal.showSuccess('Success','Saved Successfulls')
         // this.snackbar.open(JSON.stringify(result.message))
          // this.router.na
          window.history.back();

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  goBack(){
    this.location.back();
  }
}
