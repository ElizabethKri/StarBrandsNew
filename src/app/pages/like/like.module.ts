import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeRoutingModule } from './like-routing.module';
import {LikeComponent} from "./like.component";
import {StarbrandsModule} from "../starbrands/starbrands.module";


@NgModule({
  declarations: [LikeComponent],
  imports: [
    CommonModule,
    LikeRoutingModule,
    StarbrandsModule
  ]
})
export class LikeModule { }
