import { Injectable } from '@angular/core';
import {Order} from "../../interface/order";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Products} from "../../interface/products";

@Injectable({
  providedIn: 'root'
})
export class OrderAdminService {

  constructor(private http: HttpClient) {}

  sendOrderData(data: Order): Observable<any>{
    return this.http.post('http://localhost:3000/order/', data)
  }

  getOrderData(): Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:3000/order/')
  }

}


