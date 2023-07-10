import {Component, OnInit} from '@angular/core';
import {ManService} from "../../services/man/man.service";
import {WomenService} from "../../services/women/women.service";
import {NewService} from "../../services/new/new.service";
import {SaleService} from "../../services/sale/sale.service";
import {BasketService} from "../../services/basket/basket.service";
import {Products} from "../../interface/products";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  products: any[];
  responsiveOptions: any[];
  productsWoman: any []
  productsMan: any []

  constructor(
              private productSaleManService: SaleService,
              private productSaleWomenService: SaleService,
              private basketService: BasketService,
              private router: Router
  ) {
  }

  ngOnInit(): void {

    this.productSaleManService.getProductsSaleMan().then((productsM) => {

      this.productsMan = productsM;
      console.log('this.products', this.products)
    });

    this.productSaleWomenService.getProductsSaleWoman().then((productsW) => {

      this.productsWoman = productsW;
      console.log('this.products', this.products)
    });
  }

  addtocart(item: any){
    this.basketService.addtoCart(item)
  }

  goToProductInfoPage(item: Products){
    console.log('dd')
    this.router.navigate([`/starbrands/product/${item.productId}`])
  };
}
