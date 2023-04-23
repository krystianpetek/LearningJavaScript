import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SortPipe } from './sort.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    SortPipe,
    ProductDetailComponent,
    ProductCreateComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
