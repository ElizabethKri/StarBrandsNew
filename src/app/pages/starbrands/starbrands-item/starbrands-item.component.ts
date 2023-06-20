import {Component, OnInit} from '@angular/core';
import {Products} from "../../../interface/products";
import {Router} from "@angular/router";


@Component({
  selector: 'app-starbrands-item',
  templateUrl: './starbrands-item.component.html',
  styleUrls: ['./starbrands-item.component.scss']
})
export class StarbrandsItemComponent {
  products: Products[]


  constructor(private router: Router,
  ) { }

  goToProductInfoPage(item: Products){
    this.router.navigate([`/starbrands/starbrands-list/${item.productId}`])
  }
}
