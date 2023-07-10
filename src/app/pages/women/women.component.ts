import {Component, OnInit} from '@angular/core';
import {WomenService} from "../../services/women/women.service";
import {AllproductsService} from "../../services/allproducts/allproducts.service";
import {Products} from "../../interface/products";
import {Router} from "@angular/router";
import {BasketService} from "../../services/basket/basket.service";


@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit{
  responsiveOptions: any[];
  productsWoman: any [];
  productsCopy: any[];

  constructor( private productServiceW: WomenService,
               private productsAllService: AllproductsService,
               private router: Router,
               private basketService: BasketService
  ) { }
  ngOnInit(): void {

    this.productServiceW.getProductsWoman().then((productsWoman) => {

      this.productsWoman = productsWoman;
      this.productsCopy = [...productsWoman];

    });

    this.productsAllService.searchSubject$.subscribe((searchVal: string) => {
      console.log('searchVal', searchVal)
      if (searchVal) {
        this.productsWoman = this.productsAllService.filterProductData(this.productsCopy, searchVal);
      } else {
        this.productsWoman = [...this.productsCopy];
      }

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
