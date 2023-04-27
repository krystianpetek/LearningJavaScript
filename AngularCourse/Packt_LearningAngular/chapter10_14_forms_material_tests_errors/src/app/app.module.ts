import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapComponent } from './map/map.component';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { AppMaterialModule } from './app-material.module';

import { MaterialControlsComponent } from './material-controls/material-controls.component';
import { CopyTextComponent } from './copy-text/copy-text.component';
import { StubComponent } from './stub/stub/stub.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PageNotFoundComponent,
    MapComponent,
    MaterialControlsComponent,
    CopyTextComponent,
    StubComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
