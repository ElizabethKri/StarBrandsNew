import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManRoutingModule } from './man-routing.module';
import {StarbrandsModule} from "../starbrands/starbrands.module";
import {ManComponent} from "./man.component";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {TreeModule} from "primeng/tree";


@NgModule({
  declarations: [
    ManComponent
  ],
  imports: [
    CommonModule,
    ManRoutingModule,
    ButtonModule,
    CardModule,
    FormsModule,
    DropdownModule,
    TreeModule
  ]
})
export class ManModule { }
