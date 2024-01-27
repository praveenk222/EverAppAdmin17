import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
apiUrl='http://localhost:8080/api/v1/adminweb/'
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
    return this.http.post(this.apiUrl+`members`,data)
  }
  uploadFile(file: File, userId: string, fileType: string):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userid', userId);
    formData.append('filetype', fileType);

    return this.http.post<any>(this.apiUrl+'upload/'+fileType, formData);
  }
  book(orderdata:any):Observable<any>{
    return this.http.post(this.apiUrl+'orders/orderbooking',orderdata)
  }
  getPriceData() {
    return this.http.get(this.apiUrl+'product/getPriceData')
  }
}
