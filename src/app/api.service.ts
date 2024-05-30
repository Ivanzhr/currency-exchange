import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getListCurrency(): Observable<any>{
    let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    return this.http.get<any>(url)
  }

  // getData(): Observable<any> {
  //   let url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20200302&json`
  //   return this.http.get<any>(url);
  // }
}
