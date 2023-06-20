import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import {BasketComponent} from "./basket.component";
import {StarbrandsModule} from "../starbrands/starbrands.module";


@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    StarbrandsModule
  ]
})
export class BasketModule { }
