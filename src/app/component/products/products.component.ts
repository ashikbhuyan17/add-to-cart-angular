import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any
  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getAllProduct()
    console.log('productList', this.productList)

  }
  getAllProduct() {
    this.apiService.getProduct()
      .subscribe(res => {
        this.productList = res
        console.log(res);
        console.log(this.productList);
        this.productList.forEach((data: any) => {
          Object.assign(data, { quantity: 1, total: data.price })
          // console.log('productList', this.productList)

        });


      })
  }
  addToCart(item: any) {
    this.cartService.addToCart(item)
  }



}
