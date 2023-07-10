import {Component, OnInit} from '@angular/core';
import {Products} from "../../interface/products";
import {NewService} from "../../services/new/new.service";
import {Router} from "@angular/router";
import {BasketService} from "../../services/basket/basket.service";
import {AllproductsService} from "../../services/allproducts/allproducts.service";
import {ManService} from "../../services/man/man.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  productsMan: any[];
  responsiveOptions: any[];
  productsWoman: any [];
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
    private allproduct: AllproductsService,
    private manService: ManService
  ) {
  }

  ngOnInit() {
    this.manService.getProducts().subscribe()

    this.productNewManService.getProductsNewMan().then((productsMan) => {

      this.productsMan = productsMan;
      this.copyObj.sliderArr = [...productsMan];
      console.log('this.products', this.productsMan)
    });


    this.productNewWomenService.getProductsNewWoman().then((productsWoman) => {

      this.productsWoman = productsWoman;
      this.copyObj.productArr = [...productsWoman];

      console.log('this.products', this.productsMan)
    });

    // this.productList.forEach((a: any)=> {
    //   Object.assign(a, {quantity: 1, total: a.price})
    // })


    this.allproduct.searchSubject$.subscribe((searchVal: string) => {
      console.log('searchVal**', searchVal)
      if (searchVal) {
        this.productsWoman = this.allproduct.filterProductData(this.copyObj.productArr, searchVal);
        this.productsMan = this.allproduct.filterProductData(this.copyObj.sliderArr, searchVal);
      } else {
        this.productsWoman = [...this.copyObj.productArr];
        this.productsMan = [...this.copyObj.sliderArr];
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
