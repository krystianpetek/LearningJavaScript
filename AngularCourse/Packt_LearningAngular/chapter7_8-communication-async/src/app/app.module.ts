import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { NumericKeyLoggerComponent } from './numeric-key-logger/numeric-key-logger.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, KeyLoggerComponent, NumericKeyLoggerComponent],
  imports: [BrowserModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
