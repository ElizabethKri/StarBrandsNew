import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Products} from "../../interface/products";
import {ManService} from "../../services/man/man.service";

@Component({
  selector: 'app-starbrands',
  templateUrl: './starbrands.component.html',
  styleUrls: ['./starbrands.component.scss']
})
export class StarbrandsComponent implements OnInit {
  products: any[];
  responsiveOptions: any[];

  constructor(private productService: ManService) {
  }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {

      this.products = products;
      console.log('this.products', this.products)
    });
  }
}
