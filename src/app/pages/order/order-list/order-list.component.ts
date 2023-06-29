import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BasketService} from "../../../services/basket/basket.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit{
  grandTotal: number | string = 0;

  constructor(private router: Router, private basketService: BasketService) {}

  ngOnInit(): void{
    setTimeout(() => {
      this.router.navigate(["/starbrands/main"])
    }, 6000);

    this.grandTotal = this.basketService.getTotalPrice();
  }

}
