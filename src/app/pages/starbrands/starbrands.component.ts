import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Products} from "../../interface/products";
import {ManService} from "../../services/man/man.service";
import {WomenService} from "../../services/women/women.service";

@Component({
  selector: 'app-starbrands',
  templateUrl: './starbrands.component.html',
  styleUrls: ['./starbrands.component.scss']
})
export class StarbrandsComponent implements OnInit {
  products: any[];
  responsiveOptions: any[];
  productsW: any []

  constructor(private productService: ManService,
              private productServiceW: WomenService,) {
  }

  ngOnInit(): void {
    this.productService.getProductsSmall().then((products) => {

      this.products = products;
      console.log('this.products', this.products)
    });
    this.productServiceW.getProductsW().then((productsW) => {

      this.productsW = productsW;
      console.log('this.products', this.products)
    });
  }
}
