import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarbrandsItemRoutingModule } from './starbrands-item-routing.module';
import {StarbrandsItemComponent} from "./starbrands-item.component";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StarbrandsItemRoutingModule,
    ButtonModule
  ]
})
export class StarbrandsItemModule { }
