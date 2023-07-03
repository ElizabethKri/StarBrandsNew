import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StarbrandsComponent} from "./starbrands.component";
import {StarbrandsItemComponent} from "./starbrands-item/starbrands-item.component";

const routes: Routes = [
  {path: '', component: StarbrandsComponent,
  children: [
    {
      path: 'starbrands-item/:id',
      component: StarbrandsItemComponent
    },
    {
      path: 'product/:id', //путь и параметр
      loadChildren: () => import('./starbrands-item/starbrands-item.module').then(m => m.StarbrandsItemModule)
    },
    {
      path: 'woman',
      loadChildren: () => import('../women/women.module').then(m => m.WomenModule)
    },
    {
      path: 'man',
      loadChildren: () => import('../man/man.module').then(m => m.ManModule)
    },
    {
      path: 'sales',
      loadChildren: () => import('../sales/sales.module').then(m => m.SalesModule)
    },
    {
      path: 'basket',
      loadChildren: () => import('../basket/basket.module').then(m => m.BasketModule)
    },

    {path: 'main',
      loadChildren: () => import('../main/main.module').then(m => m.MainModule)
    },
    {path: 'order',
      loadChildren: () => import('../order/order.module').then(m => m.OrderModule)
    },
    {path: 'order-list',
      loadChildren: () => import('../order/order-list/order-list.module').then(m => m.OrderListModule)
    },
    {path: 'product-load',
      loadChildren: () => import('../admin/product-load/product-load.module').then(m => m.ProductLoadModule)
    },
    {path: 'order-admin',
      loadChildren: () => import('../admin/order-admin/order-admin.module').then(m => m.OrderAdminModule)
    }
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarbrandsRoutingModule { }
