import {Component, OnInit} from '@angular/core';
import {WomenService} from "../../services/women/women.service";


@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit{
  products: any[];
  responsiveOptions: any[];
  productsW: any []

  constructor( private productServiceW: WomenService,
  ) { }
  ngOnInit(): void {

    this.productServiceW.getProductsW().then((productsW) => {

      this.productsW = productsW;
      console.log('this.products', this.products)
    });
  }
}
