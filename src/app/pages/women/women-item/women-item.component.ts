import {Component, OnInit} from '@angular/core';
import {Products} from "../../../interface/products";
import {ActivatedRoute, Router} from "@angular/router";
import {NewService} from "../../../services/new/new.service";
import {WomenService} from "../../../services/women/women.service";

@Component({
  selector: 'app-women-item',
  templateUrl: './women-item.component.html',
  styleUrls: ['./women-item.component.scss']
})
export class WomenItemComponent implements  OnInit{
  products: Products[]
  productWoman: Products;


  constructor(private router: Router,private route: ActivatedRoute, private womamService: WomenService
  ) { }


  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');

    this.womamService.getProductsWoman().then((data: any) => {
      this.products = data;
      this.productWoman = this.products.find(el => el.productId === cardId)
    })

    console.log('cardId', cardId)
  }
}
