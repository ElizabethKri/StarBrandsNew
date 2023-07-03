import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductLoadComponent} from "./product-load.component";

const routes: Routes = [
  {path: '', component: ProductLoadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductLoadRoutingModule { }
