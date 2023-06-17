import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Products} from "../../../interface/products";
import {Router} from "@angular/router";
import {debounceTime, fromEvent, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-starbrands-list',
  templateUrl: './starbrands-list.component.html',
  styleUrls: ['./starbrands-list.component.scss']
})
export class StarbrandsListComponent implements OnInit {
  products: Products[]


  constructor(private router: Router,
  ) { }

  goToProductInfoPage(item: Products){
    this.router.navigate([`/starbrands/starbrands/${item.productId}`])
  }
}
