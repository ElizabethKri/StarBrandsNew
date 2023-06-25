import {Component, OnInit} from '@angular/core';
import {AllproductsService} from "../../services/allproducts/allproducts.service";
import {BasketService} from "../../services/basket/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  product: any = [];
  grandTotal !: number;

  constructor(private allproduct: AllproductsService, private basketService: BasketService) {}

  ngOnInit() {
    this.basketService.getProduct().subscribe(
      res =>{
        this.product = res;
        this.grandTotal =this.basketService.getTotalPrice();
      }
    )
  }
  removeItem(item: any){
    this.basketService.removeCartItem(item)
  }

  emptycart(){
    this.basketService.removeAllCart()
  }


}
