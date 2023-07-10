import {Component, OnInit} from '@angular/core';
import {Products} from "../../../interface/products";
import {ActivatedRoute, Router} from "@angular/router";
import {WomenService} from "../../../services/women/women.service";
import {SaleService} from "../../../services/sale/sale.service";

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss']
})
export class SaleItemComponent implements  OnInit{
  products: Products[]
  productWoman: Products;


  constructor(private router: Router,private route: ActivatedRoute, private womanService: WomenService
  ) { }


  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');

    this.womanService.getProductsWoman().then((data: any) => {
      this.products = data;
      this.productWoman = this.products.find(el => el.productId === cardId)
    })

    console.log('cardId', cardId)
  }
}
