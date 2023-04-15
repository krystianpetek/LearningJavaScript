import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ProductComponent } from './products/product/product.component';
import { FilterPipe } from './filter.pipe';
import { CopyrightDirective } from './copyright.directive';

@NgModule({
  declarations: [AppComponent, CopyrightDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ProductComponent,
    FilterPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
