import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { AppMaterialModule } from './app-material.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PageNotFoundComponent,
    MapComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ProductsModule,
    AppMaterialModule,
    AppRoutingModule,
    GoogleMapsModule,
  ],
  exports: [AppMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
