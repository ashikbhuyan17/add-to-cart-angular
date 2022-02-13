import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any = []
  grandTotal: number = 0
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe((res) => {
        this.product = res
        this.grandTotal = this.cartService.getTotalPrice()
      })
  }

  removeItem(data: any) {
    this.cartService.removeCartItem(data)
  }
  emptyCart() {
    this.cartService.removeAllCart()
  }
}
