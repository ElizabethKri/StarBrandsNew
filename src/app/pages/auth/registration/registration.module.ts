import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {ToastModule} from "primeng/toast";
import {StarbrandsModule} from "../../starbrands/starbrands.module";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {PasswordModule} from "primeng/password";
import {RegistrationComponent} from "./registration.component";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
export class RegistrationModule { }
