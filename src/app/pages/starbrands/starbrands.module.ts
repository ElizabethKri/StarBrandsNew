import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarbrandsRoutingModule } from './starbrands-routing.module';
import {MenubarModule} from "primeng/menubar";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {StarbrandsItemComponent} from "./starbrands-item/starbrands-item.component";
import {StarbrandsComponent} from "./starbrands.component";
import {RouterModule} from "@angular/router";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        StarbrandsItemComponent,
        StarbrandsComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        StarbrandsRoutingModule,
        MenubarModule,
        RouterModule,
        CarouselModule,
        ButtonModule,
        CardModule,
        FontAwesomeModule,
    ]
})
export class StarbrandsModule { }
