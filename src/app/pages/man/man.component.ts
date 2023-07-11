import {Component, OnInit} from '@angular/core';
import {ManService} from "../../services/man/man.service";
import {Products} from "../../interface/products";
import {Router} from "@angular/router";
import {BasketService} from "../../services/basket/basket.service";
import {AllproductsService} from "../../services/allproducts/allproducts.service";

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit{

  responsiveOptions: any[];
  productsMan: any []
  productsCopy: any[]

  constructor( private productServiceMan: ManService, private router: Router,
               private basketService: BasketService,
               private productsAllService: AllproductsService
  ) { }
  ngOnInit(): void {


    this.productServiceMan.getProductsMan().then((productsMan) => {
      this.productsMan = productsMan;
      this.productsCopy = [...productsMan];
    });
    this.productsAllService.searchSubject$.subscribe((searchVal: string) => {
      console.log('searchVal', searchVal)
      if (searchVal) {
        this.productsMan = this.productsAllService.filterProductData(this.productsCopy, searchVal);
      } else {
        this.productsMan = [...this.productsCopy];
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
