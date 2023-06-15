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
  {path: '**',
   redirectTo: 'starbrands'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
