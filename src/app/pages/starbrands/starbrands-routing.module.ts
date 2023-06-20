import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StarbrandsComponent} from "./starbrands.component";
import {StarbrandsItemComponent} from "./starbrands-item/starbrands-item.component";

const routes: Routes = [
  {path: '', component: StarbrandsComponent,
  children: [
    {
      path: 'starbrands-item',
      component: StarbrandsItemComponent
    },
    {
      path: 'product/:id', //путь и параметр
      loadChildren: () => import('./starbrands-item/starbrands-item.module').then(m => m.StarbrandsItemModule)
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarbrandsRoutingModule { }
