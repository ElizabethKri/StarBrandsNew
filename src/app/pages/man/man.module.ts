import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManRoutingModule } from './man-routing.module';
import {StarbrandsModule} from "../starbrands/starbrands.module";
import {ManComponent} from "./man.component";


@NgModule({
  declarations: [
    ManComponent
  ],
  imports: [
    CommonModule,
    ManRoutingModule,
    StarbrandsModule
  ]
})
export class ManModule { }
