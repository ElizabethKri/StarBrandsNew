import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderAdminComponent} from "./order-admin.component";

const routes: Routes = [
  {path: '', component: OrderAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderAdminRoutingModule { }
