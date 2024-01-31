import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
apiUrl=environment.apiurl;
baseUrl=`http://localhost:8080/api/`;
  constructor(private http:HttpClient) 
  { }

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
    return this.http.post(this.baseUrl+`members`,data)
  }
  uploadFile(file: File, userId: string, fileType: string):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userid', userId);
    formData.append('filetype', fileType);

    return this.http.post<any>(this.baseUrl+'upload/'+fileType, formData);
  }
  book(orderdata:any):Observable<any>{
    return this.http.post(this.baseUrl+'orders/orderbooking',orderdata)
  }
  getPriceData() {
    return this.http.get(this.baseUrl+'product/getPriceData')
  }
  // getordersummeryByBookingNo(bookingNo:string){
  //   let  bookingdata = {
  //       "BookingNo": bookingNo
  //     }
  //     return this.http.post(this.apiUrl+`getorderbyorderid/1004`,bookingdata);
  //   }
  getorder(order:any):Observable<any>{
    return this.http.get('http://localhost:8080/api/orders/getorderbyorderid/1004',order)
  }
  getnotification():Observable<any>{
    return this.http.get(this.apiUrl+'customers/getnotification')
  }
  savenotification(order:any):Observable<any>{
    return this.http.post(this.apiUrl+'customers/savenotification',order)
  }

}
