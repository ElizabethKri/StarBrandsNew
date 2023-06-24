import {Component, OnInit} from '@angular/core';
import {ManService} from "../../services/man/man.service";

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit{
  products: any[];
  responsiveOptions: any[];
  productsM: any []

  constructor( private productServiceM: ManService,
  ) { }
  ngOnInit(): void {

    this.productServiceM.getProducts().then((productsM) => {
      this.productsM = productsM;
      console.log('this.products', this.products)
    });
  }
}
