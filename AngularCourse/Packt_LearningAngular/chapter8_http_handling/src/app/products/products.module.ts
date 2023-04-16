import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [ProductListComponent, SortPipe],
  imports: [CommonModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
