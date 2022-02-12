import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAllProduct()
    
  }
  getAllProduct(){
    this.apiService.getProduct()
    .subscribe(res => {
      this.productList = res
      console.log(res);
      console.log(this.productList);
      
      
    })
  }

}
