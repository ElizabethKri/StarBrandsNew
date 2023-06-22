import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import {FormsModule} from "@angular/forms";
import {StarbrandsRoutingModule} from "../starbrands/starbrands-routing.module";
import {MenubarModule} from "primeng/menubar";
import {RouterModule} from "@angular/router";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {MainRoutingModule} from "./main-routing.module";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    MenubarModule,
    RouterModule,
    CarouselModule,
    ButtonModule,
    CardModule,
  ]
})
export class MainModule { }
