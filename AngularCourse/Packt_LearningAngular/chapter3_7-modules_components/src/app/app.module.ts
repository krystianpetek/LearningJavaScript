import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ProductComponent } from './products/product/product.component';
import { FilterPipe } from './filter.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [AppComponent, CopyrightDirective, NumericDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ProductComponent,
    FilterPipe,
    AutofocusDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
