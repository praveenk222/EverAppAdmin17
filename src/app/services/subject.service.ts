import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = 'http://localhost:8080/api/v1/adminweb/'; // Replace with your API URL
  private dataSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  sendData(data: any) {
    this.dataSubject.next(data);
  }

  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }

  getLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}products/getLookup`);
  }

  postDataToApi(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, data);
  }
  // getLookup(): Observable<any> {
  //   // return the subject here
  //   // subscribers will will notified when the data is refreshed for replaysubject
  //   let data= this.http.get<any>(`${this.apiUrl}products/getLookup`);
  //   return data.asObservable<any>(); 
  // }
}
