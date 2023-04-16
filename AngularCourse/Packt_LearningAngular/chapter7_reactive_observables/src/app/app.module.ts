import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { NumericKeyLoggerComponent } from './numeric-key-logger/numeric-key-logger.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, KeyLoggerComponent, NumericKeyLoggerComponent],
  imports: [BrowserModule, ProductsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
