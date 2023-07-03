import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user/user.service";
import {BasketService} from "../../services/basket/basket.service";

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
      telephone: new FormControl(),
      adress: new FormControl('', {validators: Validators.required})
    })

    this.total = this.basketService.getTotalPrice()
  }

  onSubmit(){
    this.userForm.value;
  }
}

