import {Component, OnInit} from '@angular/core';
import {ManService} from "../../services/man/man.service";
import {WomenService} from "../../services/women/women.service";
import {NewService} from "../../services/new/new.service";
import {SaleService} from "../../services/sale/sale.service";
import {BasketService} from "../../services/basket/basket.service";
import {Products} from "../../interface/products";
import {Router} from "@angular/router";
import {AllproductsService} from "../../services/allproducts/allproducts.service";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  products: any[];
  responsiveOptions: any[];
  productsWoman: any [];
  productsMan: any [];
  copyObj = {
    sliderArr: [],
    productArr: []
  }

  constructor(
              private productSaleManService: SaleService,
              private productSaleWomenService: SaleService,
              private basketService: BasketService,
              private router: Router,
              private allproduct: AllproductsService,

  ) {
  }

  ngOnInit(): void {

    this.productSaleManService.getProductsSaleMan().then((productsMan) => {

      this.productsMan = productsMan;
      console.log('this.products', this.products)
      this.copyObj.productArr = [...productsMan];

    });

    this.productSaleWomenService.getProductsSaleWoman().then((productsWoman) => {

      this.productsWoman = productsWoman;
      console.log('this.products', this.products)
      this.copyObj.sliderArr = [...productsWoman];
    });

    this.allproduct.searchSubject$.subscribe((searchVal: string) => {
      console.log('searchVal**', searchVal)
      if (searchVal) {
        this.productsMan = this.allproduct.filterProductData(this.copyObj.productArr, searchVal);
        this.productsWoman = this.allproduct.filterProductData(this.copyObj.sliderArr, searchVal);
      } else {
        this.productsMan = [...this.copyObj.productArr];
        this.productsWoman = [...this.copyObj.sliderArr];
      }
    })
  }

  addtocart(item: any){
    this.basketService.addtoCart(item)
  }

  goToProductInfoPage(item: Products){
    console.log('dd')
    this.router.navigate([`/starbrands/product/${item.productId}`])
  };
}
