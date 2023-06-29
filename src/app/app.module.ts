import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {StarbrandsModule} from "./pages/starbrands/starbrands.module";

import { OrderListComponent } from './pages/order/order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        FontAwesomeModule,
        StarbrandsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
