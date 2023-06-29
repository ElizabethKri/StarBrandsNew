import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import {SalesComponent} from "./sales.component";
import {StarbrandsModule} from "../starbrands/starbrands.module";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import { SaleItemComponent } from './sale-item/sale-item.component';


@NgModule({
  declarations: [SalesComponent, SaleItemComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    StarbrandsModule,
    FormsModule,
    ButtonModule,
    CardModule,
    CarouselModule
  ]
})
export class SalesModule { }
