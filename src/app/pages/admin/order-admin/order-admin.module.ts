import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { OrderAdminRoutingModule } from './order-admin-routing.module';
import {OrderAdminComponent} from "./order-admin.component";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [OrderAdminComponent],
  imports: [
    CommonModule,
    OrderAdminRoutingModule,
    TableModule
  ],
  providers: [DatePipe]
})
export class OrderAdminModule { }
