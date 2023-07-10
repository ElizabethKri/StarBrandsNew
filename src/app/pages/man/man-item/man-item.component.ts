import {Component, OnInit} from '@angular/core';
import {Products} from "../../../interface/products";
import {ActivatedRoute, Router} from "@angular/router";
import {NewService} from "../../../services/new/new.service";
import {ManService} from "../../../services/man/man.service";

@Component({
  selector: 'app-man-item',
  templateUrl: './man-item.component.html',
  styleUrls: ['./man-item.component.scss']
})
export class ManItemComponent implements  OnInit{
  products: Products[]
  productMan: Products;


  constructor(private router: Router,private route: ActivatedRoute, private manService: ManService
  ) { }


  ngOnInit(){
    const cardId = this.route.snapshot.paramMap.get('id');
    console.log('***')
    this.manService.getProductsMan().then((data: any) => {
      this.products = data;
      this.productMan = this.products.find(el => el.productId === cardId)
    })
    console.log('cardId', cardId)
  }
}
