export class SampleModel {
    Model: string='';
    Category: number=0;
    Quantity: number=0;
    Brand!: string;
    BranchID: number=0;
    Size!: string;
    Color!: string;
    ImageName!: string;
    ImageID: number=0;
    IsActive: boolean=true;
    IsAvailable:boolean=true;
    CreatedDate!: string; 
    ModifiedDate!: string; 
    EstablishedDate!: string; 
    Condition: number=0;
    LastServiceDate!: string; 
    VehicleModel: number=0;
    Price: number=0;
    Battery: any; 
    Connectivity: any; 
    Efficiency: any; 
    Mileage: any; 
    Torque: any; 
    Weight: any; 
    OtherDescription: any; 
    Capacity: any; 
    Range: any; 
    Chemistry: any; 
    ChargingTime: any; 
    ChargingType: any; 
    CompactTo: any; 
    ProductType: number=0;
    ProductId: number=0;
    ModelName: any; 
    Description: any; 
    RegistrationNo:any;
    ProductName:any;
    RegistrationDate:any;
  }
  

  export interface BranchModal {
    BranchCode: string;
    BranchName: string;
    RegNo: string;
    IsActive: boolean;
    CreatedBy: string;
    ModifiedBy: string;
    OpenTime: string; // You might want to use a Date type if it represents a time
    CloseTime: string; // You might want to use a Date type if it represents a time
    ProfileImage: string;
    BranchType: number;
  }