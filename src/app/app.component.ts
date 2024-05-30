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
  selectCurency: any;
  count: any;
  total: any;

  constructor(private apiService: ApiService){}

  calculation(){
    let a = this.count / this.selectCurency
    this.total = a.toFixed(2)
  }

  ngOnInit(){
    this.apiService.getListCurrency().subscribe(
      (responce) => {
        this.currency = responce
        console.log(this.currency)
      }
    )
    console.log(this.selectCurency)
    
  }
}
