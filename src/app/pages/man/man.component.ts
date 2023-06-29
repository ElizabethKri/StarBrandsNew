import {Component, OnInit} from '@angular/core';
import {ManService} from "../../services/man/man.service";
import {Products} from "../../interface/products";
import {Router} from "@angular/router";
import {BasketService} from "../../services/basket/basket.service";

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit{
  products: any[];
  responsiveOptions: any[];
  productsM: any []

  constructor( private productServiceM: ManService, private router: Router,
               private basketService: BasketService
  ) { }
  ngOnInit(): void {

    this.productServiceM.getProducts().then((productsM) => {
      this.productsM = productsM;
      console.log('this.products', this.products)
    });
  }
  goToProductInfoPage(item: Products){
    console.log('dd')
    this.router.navigate([`/starbrands/product/${item.productId}`])
  };

  addtocart(item: any){
    this.basketService.addtoCart(item)
  }
}
