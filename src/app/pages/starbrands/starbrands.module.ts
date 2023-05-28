import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarbrandsRoutingModule } from './starbrands-routing.module';
import {MenubarModule} from "primeng/menubar";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {StarbrandsListComponent} from "./starbrands-list/starbrands-list.component";
import {StarbrandsComponent} from "./starbrands.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    StarbrandsListComponent,
    StarbrandsComponent],
  imports: [
    CommonModule,
    StarbrandsRoutingModule,
    MenubarModule,
    RouterModule,
  ]
})
export class StarbrandsModule { }
