import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Products} from "../../interface/products";
import {ManService} from "../../services/man/man.service";
import {WomenService} from "../../services/women/women.service";
import {NewService} from "../../services/new/new.service";

@Component({
  selector: 'app-starbrands',
  templateUrl: './starbrands.component.html',
  styleUrls: ['./starbrands.component.scss']
})
export class StarbrandsComponent implements OnInit {
  products: any[];
  responsiveOptions: any[];
  productsW: any []

  constructor(
    private productNewManService: NewService,
    private productNewWomenService: NewService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.navigate(['/starbrands/main'])

  }
}

