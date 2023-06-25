import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'starbrands',
  loadChildren: () => import('./pages/starbrands/starbrands.module').then(m => m.StarbrandsModule)
  },
  {path: 'registration',
    loadChildren: () => import('./pages/auth/registration/registration.module').then(m => m.RegistrationModule)
  },
  {path: 'authorization',
    loadChildren: () => import('./pages/auth/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {path: 'man',
    loadChildren: () => import('./pages/man/man.module').then(m => m.ManModule)
  },
  {path: 'women',
    loadChildren: () => import('./pages/women/women.module').then(m => m.WomenModule)
  },
  {path: 'sale',
    loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule)
  },
  {path: 'basket',
    loadChildren: () => import('./pages/basket/basket.module').then(m => m.BasketModule)
  },
  {path: '**',
   redirectTo: 'starbrands'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
