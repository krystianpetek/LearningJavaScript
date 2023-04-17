import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SortPipe } from './sort.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';

@NgModule({
  declarations: [ProductListComponent, SortPipe, ProductDetailComponent, ProductCreateComponent],
  imports: [CommonModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
