import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SortPipe } from './sort.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    ProductListComponent,
    SortPipe,
    ProductDetailComponent,
    ProductCreateComponent,
    PriceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
  ],
  exports: [ProductListComponent],
})
export class ProductsModule {}
