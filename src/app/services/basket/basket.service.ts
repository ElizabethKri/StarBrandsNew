import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }

  addtoCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice()
    console.log(this.cartItemList)
  }

  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a:any) =>{
      grandTotal += a.total
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    console.log('cartItemList', this.cartItemList)
    const indexToRemove = this.cartItemList.findIndex((el) => el.productId === product.productId);

    if (indexToRemove !== -1) {
      this.cartItemList.splice(indexToRemove, 1);
    }
    // this.cartItemList.map((a: any, index: any) =>{
    //   if(product.id === a.id){
    //     this.cartItemList.splice(index, 1);
    //   }
    // })
    this.productList.next(this.cartItemList)
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
