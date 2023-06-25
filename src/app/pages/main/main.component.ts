import {Component, OnInit} from '@angular/core';
import {Products} from "../../interface/products";
import {NewService} from "../../services/new/new.service";
import {Router} from "@angular/router";
import {BasketService} from "../../services/basket/basket.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  products: any[];
  responsiveOptions: any[];
  productsW: any []
  public productList: any;
  constructor(
    private productNewManService: NewService,
    private productNewWomenService: NewService,
    private router: Router,
    private basketService: BasketService,
  ) {
  }

  ngOnInit() {

    this.productNewManService.getProductsSmall().then((products) => {

      this.products = products;
      console.log('this.products', this.products)
    });


    this.productNewWomenService.getProductsNewW().then((productsW) => {

      this.productsW = productsW;
      console.log('this.products', this.products)
    });

    this.productList.forEach((a: any)=> {
      Object.assign(a, {quantity: 1, total: a.price})
    })
  }

goToProductInfoPage(item: Products){
  console.log('dd')
  this.router.navigate([`/starbrands/product/${item.productId}`])
};

  addtocart(item: any){
    this.basketService.addtoCart(item)
  }


}
