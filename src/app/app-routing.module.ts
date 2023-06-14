import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'starbrands',
  loadChildren: () => import('./pages/starbrands/starbrands.module').then(m => m.StarbrandsModule)
  },
  {path: 'registration',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
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
