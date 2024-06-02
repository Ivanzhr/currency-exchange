import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project1';
  data: any;
  currency: any;
  selectCurencyFrom = "UAH";
  selectCurencyTo: any;
  count: any;
  total: any;

  constructor(public apiService: ApiService){}

  calculation(){
    let a = this.count * this.selectCurencyTo
    this.total = a.toFixed(2)
    this.apiService.selectCurrency(this.selectCurencyFrom)
    // this.apiService.getRateCurrency()
    // console.log(a)
    // console.log(this.count)
    // console.log(this.selectCurencyFrom)
    // console.log(this.selectCurencyTo)
  }

  // ngOnInit(){
  //   this.apiService.getListCurrency().subscribe(
  //     (responce) => {
  //       this.currency = responce
  //       console.log(this.currency)
  //     }
  //   )
  //   console.log(this.selectCurencyFrom)
    
  // }
  ngOnInit(){
    this.apiService.getRateCurrency().subscribe(
      (responce) => {
        this.currency = Object.entries(responce.conversion_rates).map(([currency, rate]) => {return {currency, rate}})
        console.log(responce)
      }
    )
  }
}
