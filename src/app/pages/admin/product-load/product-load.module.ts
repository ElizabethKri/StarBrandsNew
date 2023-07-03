import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLoadRoutingModule } from './product-load-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {ProductLoadComponent} from "./product-load.component";


@NgModule({
  declarations: [ProductLoadComponent],
  imports: [
    CommonModule,
    ProductLoadRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputNumberModule,
    InputTextModule
  ]
})
export class ProductLoadModule { }
