import {Component, OnInit} from '@angular/core';
import {ManService} from "../../services/man/man.service";
import {WomenService} from "../../services/women/women.service";
import {NewService} from "../../services/new/new.service";
import {SaleService} from "../../services/sale/sale.service";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  products: any[];
  responsiveOptions: any[];
  productsW: any []
  productsM: any []

  constructor(
              private productSaleManService: SaleService,
              private productSaleWomenService: SaleService,
  ) {
  }

  ngOnInit(): void {

    this.productSaleManService.getProductsSaleM().then((productsM) => {

      this.productsM = productsM;
      console.log('this.products', this.products)
    });

    this.productSaleWomenService.getProductsSaleW().then((productsW) => {

      this.productsW = productsW;
      console.log('this.products', this.products)
    });
  }
}
