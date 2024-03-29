import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  visible:boolean;

apiUrl=environment.apiurl;
m_apiUrl=environment.m_apiurl;
  constructor(private http:HttpClient) 
  { 

    this.visible=false;
  }
hide(){
  this.visible=true;
}
show(){
  this.visible=false;
}
  async getUsers():  Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'customers').subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  async getOrders(type:number):  Promise<any> {
    

    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'orders/'+type).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  loginAdmin(data:any):Observable<any>{
  return this.http.post(this.apiUrl + `customers/adminLogin`, data);
  }
  signup(data:any):Observable<any>{
    return this.http.post(this.m_apiUrl+`members`,data)
  }
  uploadFile(file: File, userId: string, fileType: string):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userid', userId);
    formData.append('filetype', fileType);

    return this.http.post<any>(this.m_apiUrl+'upload/'+fileType, formData);
  }
  book(orderdata:any):Observable<any>{
    return this.http.post(this.m_apiUrl+'orders/orderbooking',orderdata)
  }
  getPriceData() {
    return this.http.get(this.m_apiUrl+'product/getPriceData')
  }
  // getordersummeryByBookingNo(bookingNo:string){
  //   let  bookingdata = {
  //       "BookingNo": bookingNo
  //     }
  //     return this.http.post(this.apiUrl+`getorderbyorderid/1004`,bookingdata);
  //   }
  getorder(order:any):Observable<any>{
    return this.http.get(this.m_apiUrl+'orders/getorderbyorderid/1004',order)
  }
  getnotification():Observable<any>{
    return this.http.get(this.apiUrl+'customers/getnotification')
  }
  savenotification(order:any):Observable<any>{
    return this.http.post(this.apiUrl+'customers/savenotification',order)
  }
getMemberDetails(userid:number){
  return this.http.get(this.m_apiUrl+'members/'+userid)

}
getAlloffers(){
  return this.http.get(`https://everbackend.onrender.com/api/admin/offers/getall`);
}
savepromo(order:any):Observable<any>{
  return this.http.post(this.m_apiUrl+'admin/promocode/save',order)
}
updatepromo(order:any):Observable<any>{
  return this.http.post(this.m_apiUrl+'admin/promocode/Update',order)
}
deletePromo(ID1:number,ID2:number){
  let payload=
    {
      "OfferID": ID1,
      "CouponID": ID2     
  }
  
  return this.http.post(this.m_apiUrl+`admin/promocode/remove`,payload);
}
getComplainsList(){
  return this.http.get(this.m_apiUrl+'admin/getComplains')
}
getorderByUserID(userid:number){
  return this.http.get(this.m_apiUrl+'orders/getorderbyUserid/'+userid)
}
getordersummeryByBookingNo(bookingNo:string){
  let  bookingdata = {
      "BookingNo": bookingNo
    }
    return this.http.post(this.m_apiUrl+`orders/getordersummeryByBookingNo`,bookingdata);
  }
  postcomplain(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/adminweb/customers/adComplains',data)
  }
  getnavlist(){
    return this.http.get('http://localhost:8080/api/v1/adminweb/customers/getLeftnavbar')
  }
  getNavById(){
    return this.http.get('http://localhost:8080/api/v1/adminweb/customers/getLeftNavbarByID/1000')
  }
  getusertabbyid(){

  }
  getdasboarddata(){
    return this.http.get('http://localhost:8080/api/v1/adminweb/customers/getDashboardData')
  }
}
