import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user/user.service";
import {BasketService} from "../../services/basket/basket.service";
import {Products} from "../../interface/products";
import {Order} from "../../interface/order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent  implements OnInit {
  login: string;
  psw: string;
  telephone: string;
  pswRepeat: string;
  adress: string
  email: string;
  saveValue: boolean;
  id: string;
  userForm: FormGroup| any;
  grandTotal !: number | string;
  total: number | string
  product: Products
  cols = [
    // по field отображаются свойства
    {field: 'firstName', header: 'Имя'},
  ];

  constructor(
              private http: HttpClient,
              private basketService: BasketService
  ) {
  }

  ngOnInit(): void {
    //создание формГруппы
    this.userForm = new FormGroup({
      firstName: new FormControl('', {validators: Validators.required}),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', {validators: Validators.required}),
      telephone: new FormControl('', {validators: Validators.required}),
      adress: new FormControl('', {validators: Validators.required})
    })

    this.total = this.basketService.getTotalPrice()
  }

  initOrders():void{
    const userData = this.userForm.getRawValue();
    const postData = {...this.product, ...userData}

    const postObj: Order = {
      firstName:postData.firstName,
      lastName: postData.lastName,
      email: postData.email,
      telephone:postData.telephone,
      adress: postData.adress,
      productId: postData.productId,
      userId: postData.userId
    }
    this.basketService.sendProductsData(postObj).subscribe(data=>{
      window.localStorage.setItem('userInfo', JSON.stringify(data))
    })

    console.log('postObj', postObj)
  }

  onSubmit(){
    this.userForm.value;
  }
}

