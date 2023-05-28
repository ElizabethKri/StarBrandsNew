import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StarbrandsComponent} from "./starbrands.component";
import {StarbrandsListComponent} from "./starbrands-list/starbrands-list.component";

const routes: Routes = [
  {path: '', component: StarbrandsComponent,
  children: [
    {
      path: 'starbrands-list',
      component: StarbrandsListComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarbrandsRoutingModule { }
