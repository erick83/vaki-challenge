import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';

import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/summary',
        pathMatch: 'full',
      },
      {
        path: 'summary',
        component: SummaryComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
