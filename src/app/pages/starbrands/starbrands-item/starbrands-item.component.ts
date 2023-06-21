import {Component, OnInit} from '@angular/core';
import {Products} from "../../../interface/products";
import {ActivatedRoute, Router} from "@angular/router";
import {NewService} from "../../../services/new/new.service";


@Component({
  selector: 'app-starbrands-item',
  templateUrl: './starbrands-item.component.html',
  styleUrls: ['./starbrands-item.component.scss']
})
export class StarbrandsItemComponent implements  OnInit{
  products: Products[]
  productItem: Products;


  constructor(private router: Router,private route: ActivatedRoute, private newService: NewService
  ) { }


  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');

     this.newService.getProductsNewW().then((data: any) => {
       this.products = data;

       this.productItem = this.products.find(el => el.productId = cardId)
     })


    console.log('cardId', cardId)

  }
}
