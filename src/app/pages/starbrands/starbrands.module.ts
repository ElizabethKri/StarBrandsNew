import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarbrandsRoutingModule } from './starbrands-routing.module';
import {MenubarModule} from "primeng/menubar";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {StarbrandsListComponent} from "./starbrands-list/starbrands-list.component";
import {StarbrandsComponent} from "./starbrands.component";
import {RouterModule} from "@angular/router";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        StarbrandsListComponent,
        StarbrandsComponent],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        StarbrandsRoutingModule,
        MenubarModule,
        RouterModule,
         CarouselModule,
      ButtonModule
    ]
})
export class StarbrandsModule { }
