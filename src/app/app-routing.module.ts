import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'starbrands',
  loadChildren: () => import('./pages/starbrands/starbrands.module').then(m => m.StarbrandsModule)
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
