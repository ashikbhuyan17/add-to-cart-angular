import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  // subscribe and data emited and pass value
  public productList = new BehaviorSubject<any>([])
  constructor() { }
  getProduct() {
    // console.log('this.productList.asObservable()',this.productList.asObservable())
    return this.productList.asObservable()
  }
  setProduct(product: any) {
    this.cartItemList.push(...product)
    this.productList.next(product)  // emit
  }
  addToCart(product: any) {
    console.log('..........', product)
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice()
    console.log('..........', this.cartItemList)
  }
  getTotalPrice(): number {
    let grandTotal = 0
    this.cartItemList.map((data: any) => {
      grandTotal += data.total;
    })
    return grandTotal
  }
  removeCartItem(product: any) {
    this.cartItemList.map((data: any, index: any) => {
      if (product.id === data.id) {
        this.cartItemList.splice(index, 1)
      }
    })
    this.productList.next(this.cartItemList)
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }
}
