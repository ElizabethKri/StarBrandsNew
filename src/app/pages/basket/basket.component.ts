import {Component, OnInit} from '@angular/core';
import {AllproductsService} from "../../services/allproducts/allproducts.service";
import {BasketService} from "../../services/basket/basket.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  product: any = [];
  grandTotal !: number | string;

  constructor(private allproduct: AllproductsService, private basketService: BasketService) {}

  ngOnInit() {
    this.basketService.getProduct().subscribe(res =>{
        console.log('xxx', res)
      if (Array.isArray(res) && res.length ===0) {
        if (localStorage.getItem('basketItems')) {
          const products = localStorage.getItem('basketItems');
          this.product = JSON.parse(products)

        }
      }

        this.product = res;
        this.grandTotal =this.basketService.getTotalPrice();


      localStorage.setItem('basketItems', JSON.stringify(res))
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
