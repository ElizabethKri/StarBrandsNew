import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {RegistrationComponent} from "./registration/registration.component";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {AuthComponent} from "./auth.component";
import {TabViewModule} from "primeng/tabview";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {MessageService} from "primeng/api";
import {StarbrandsModule} from "../starbrands/starbrands.module";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {PasswordModule} from "primeng/password";


@NgModule({
  declarations: [
    AuthorizationComponent,
    AuthComponent,
    RegistrationComponent],

    imports: [
        CommonModule,
      FormsModule,
      ReactiveFormsModule,
        AuthRoutingModule,
        TabViewModule,
        InputTextModule,

        CheckboxModule,
        ToastModule,
        StarbrandsModule,
        InputNumberModule,
        CalendarModule,
        DropdownModule,
      InputMaskModule,
      PasswordModule
    ],

  providers: [MessageService]
})
export class AuthModule { }
