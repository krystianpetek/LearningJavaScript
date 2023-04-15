import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { ProductHostDirective } from './product-host.directive';
import PermissionDirective from './permission.directive';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
    ProductHostDirective,
    PermissionDirective,
    FavoritesComponent,
  ],
  imports: [CommonModule, ProductComponent],
  exports: [ProductListComponent],
})
export class ProductsModule {}
