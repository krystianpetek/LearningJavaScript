import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TsIntroductionComponent } from './ts-introduction/ts-introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    TsIntroductionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
