import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DatePipe} from "@angular/common";
import {Order} from "../../../interface/order";

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.scss']
})
export class OrderAdminComponent implements OnInit {
  orders: Order[] = [];
  cols = [
    // по field отображаются свойства
    {field: 'productId', header: 'Имя'},
  ];
  constructor(private  datePipe: DatePipe,
              private http:HttpClient, private userService: UserService) { }

  getOrderList(): Observable<Order[]>{
    const id = this.userService.getUser()?.id;


    return this.http.get<Order[]>(`http://localhost:3000/order/${id}`).pipe(
      map((data) => {
          const newArr: Order[] =[];
          data.forEach((el) => {
            const newObj: Order = {
              firstName: el.firstName,
              lastName: el.lastName,
              email: el.email,
              telephone: el.telephone,
              adress: el.adress,
              productId: el.productId,
              userId: el.userId
            }
            newArr.push(newObj)
          })
          return newArr
        }
      ))
  }
  ngOnInit(): void {
    this.getOrderList().subscribe((orders) => {
      this.orders = orders;
    })
  }


}
