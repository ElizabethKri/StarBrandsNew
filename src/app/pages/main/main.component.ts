import {Component, OnInit} from '@angular/core';
import {Products} from "../../interface/products";
import {NewService} from "../../services/new/new.service";
import {Router} from "@angular/router";
import {BasketService} from "../../services/basket/basket.service";
import {AllproductsService} from "../../services/allproducts/allproducts.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  products: any[];
  responsiveOptions: any[];
  productsW: any [];
  copyObj = {
    sliderArr: [],
    productArr: []
  }
  public productList: any;
  constructor(
    private productNewManService: NewService,
    private productNewWomenService: NewService,
    private router: Router,
    private basketService: BasketService,
    private allproduct: AllproductsService
  ) {
  }

  ngOnInit() {

    this.productNewManService.getProductsSmall().then((products) => {

      this.products = products;
      this.copyObj.sliderArr = [...products];
      console.log('this.products', this.products)
    });


    this.productNewWomenService.getProductsNewW().then((productsW) => {

      this.productsW = productsW;
      this.copyObj.productArr = [...productsW];

      console.log('this.products', this.products)
    });

    // this.productList.forEach((a: any)=> {
    //   Object.assign(a, {quantity: 1, total: a.price})
    // })


    this.allproduct.searchSubject$.subscribe((searchVal: string) => {
      console.log('searchVal**', searchVal)
      if (searchVal) {
        this.productsW = this.allproduct.filterProductData(this.copyObj.productArr, searchVal);
        this.products = this.allproduct.filterProductData(this.copyObj.sliderArr, searchVal);
      } else {
        this.productsW = [...this.copyObj.productArr];
        this.products = [...this.copyObj.sliderArr];
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
