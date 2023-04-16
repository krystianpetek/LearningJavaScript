import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [ProductListComponent, ProductViewComponent],
  imports: [CommonModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
