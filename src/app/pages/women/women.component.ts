import {Component, OnInit} from '@angular/core';
import {WomenService} from "../../services/women/women.service";
import {AllproductsService} from "../../services/allproducts/allproducts.service";


@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit{
  products: any[];
  responsiveOptions: any[];
  productsW: any [];
  productsCopy: any[];

  constructor( private productServiceW: WomenService,
               private productsAllService: AllproductsService
  ) { }
  ngOnInit(): void {

    this.productServiceW.getProductsW().then((productsW) => {

      this.productsW = productsW;
      this.productsCopy = [...productsW];
      console.log('this.products', this.products)
    });

    this.productsAllService.searchSubject$.subscribe((searchVal: string) => {
      console.log('searchVal', searchVal)
      if (searchVal) {
        this.productsW = this.productsAllService.filterProductData(this.productsCopy, searchVal);
      } else {
        this.productsW = [...this.productsCopy];
      }

    })
  }
}
