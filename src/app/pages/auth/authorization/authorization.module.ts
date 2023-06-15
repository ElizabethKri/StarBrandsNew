import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {StarbrandsModule} from "../../starbrands/starbrands.module";
import {InputNumberModule} from "primeng/inputnumber";
import {InputMaskModule} from "primeng/inputmask";
import {PasswordModule} from "primeng/password";
import {AuthorizationComponent} from "./authorization.component";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    StarbrandsModule,
    InputNumberModule,
    InputMaskModule,
    PasswordModule
  ],
  providers: [MessageService]
})
export class AuthorizationModule { }
