import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BasketComponent } from './pages/personal-account/basket/basket.component';
import { LikeComponent } from './pages/personal-account/like/like.component';
import { OrdersComponent } from './pages/personal-account/orders/orders.component';
import { PersonalAccountComponent } from './pages/personal-account/personal-account.component';
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ManComponent } from './pages/man/man/man.component';
import { WomenComponent } from './pages/man/women/women.component';
import { SalesComponent } from './pages/sales/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    LikeComponent,
    OrdersComponent,
    PersonalAccountComponent,
    ManComponent,
    WomenComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
