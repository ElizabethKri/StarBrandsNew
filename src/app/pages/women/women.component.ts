import {Component, OnInit} from '@angular/core';
import {ManService} from "../../services/man/man.service";
import {WomenService} from "../../services/women/women.service";
import {NewService} from "../../services/new/new.service";

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
