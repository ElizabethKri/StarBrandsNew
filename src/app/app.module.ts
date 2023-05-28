import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './pages/auth/authorization/authorization.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { AuthComponent } from './pages/auth/auth.component';
import { BasketComponent } from './pages/personal-account/basket/basket.component';
import { LikeComponent } from './pages/personal-account/like/like.component';
import { OrdersComponent } from './pages/personal-account/orders/orders.component';
import { PersonalAccountComponent } from './pages/personal-account/personal-account.component';
import { StarbrandsComponent } from './pages/starbrands/starbrands.component';
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegistrationComponent,
    AuthComponent,
    BasketComponent,
    LikeComponent,
    OrdersComponent,
    PersonalAccountComponent,
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
