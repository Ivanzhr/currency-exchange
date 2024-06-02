import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey = '031e69b121f23db182fac930';
  currencyName = 'UAH';
  
  constructor(private http: HttpClient) { }

  getRateCurrency(): Observable<any>{
    let url = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${this.currencyName}`
    return this.http.get<any>(url)
  }

  selectCurrency(a: any){
    return this.currencyName = a;
  }












  // getListCurrency(): Observable<any>{
  //   let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
  //   return this.http.get<any>(url)
  // }

  


  // getData(): Observable<any> {
  //   let url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20200302&json`
  //   return this.http.get<any>(url);
  // }
}
