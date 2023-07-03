import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderAdminRoutingModule } from './order-admin-routing.module';
import {OrderAdminComponent} from "./order-admin.component";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [OrderAdminComponent],
  imports: [
    CommonModule,
    OrderAdminRoutingModule,
    TableModule
  ]
})
export class OrderAdminModule { }
