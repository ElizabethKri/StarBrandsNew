import {Component, OnInit} from '@angular/core';
import {Products} from "../../../interface/products";
import {ActivatedRoute, Router} from "@angular/router";
import {NewService} from "../../../services/new/new.service";
import {BasketService} from "../../../services/basket/basket.service";


@Component({
  selector: 'app-starbrands-item',
  templateUrl: './starbrands-item.component.html',
  styleUrls: ['./starbrands-item.component.scss']
})
export class StarbrandsItemComponent implements  OnInit{
  products: Products[]
  productItem: Products;



  constructor(private router: Router,private route: ActivatedRoute, private newService: NewService, private basketService: BasketService
  ) { }


  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');

     this.newService.getAllProducts().then((data: any) => {
       this.products = data;
       this.productItem = this.products.find(el => el.productId === cardId)
     })

    //
    // this.newService.getProductsNewWoman().then((data: any) => {
    //   this.products = data;
    //   this.productItem = this.products.find(el => el.productId === cardId)
    // })


    console.log('cardId', cardId)

  }

  addtocart(item: any){
    this.basketService.addtoCart(item)
  }
}
