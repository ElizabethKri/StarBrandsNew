import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {OrderAdminComponent} from "../../pages/admin/order-admin/order-admin.component";
import {OrderAdminService} from "../order-admin/order-admin.service";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  grandTotal !: number;
  numofItems = new BehaviorSubject([]);



  constructor(private orderAdmin: OrderAdminService) { }

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

  //итоговый расчет
  getTotalPrice(): string {
    let grandTotal = 0;
    this.cartItemList.map((a:any) =>{
      const itemPrice = typeof a.price === "string" ? Number(a.price) : 0;
      grandTotal += itemPrice
    })
    return grandTotal.toFixed(3);
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

  sendProductsData(data): Observable<any>{
    return this.orderAdmin.sendOrderData(data);
  }
  getOrderData(): Observable<any>{
    return this.orderAdmin.getOrderData();
  }

}
