import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.guard';
import { cartCheckoutGuard } from './cart/cart-checkout.guard';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
    canDeactivate: [cartCheckoutGuard],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about-info/about-info.component').then(
        (c) => c.AboutInfoComponent
      ),
    // loadChildren: () =>
    // import('./about/about.module').then((m) => m.AboutModule),
    canMatch: [authGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
