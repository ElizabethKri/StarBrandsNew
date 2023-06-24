import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import {WomenComponent} from "./women.component";
import {StarbrandsModule} from "../starbrands/starbrands.module";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {AsideComponent} from "../starbrands/aside/aside.component";
import {TreeModule} from "primeng/tree";
import {DropdownModule} from "primeng/dropdown";



@NgModule({
    declarations: [WomenComponent, AsideComponent],

  imports: [
    CommonModule,
    WomenRoutingModule,
    StarbrandsModule,
    ButtonModule,
    CardModule,
    FormsModule,
    DropdownModule,
    TreeModule
  ]
})
export class WomenModule { }

