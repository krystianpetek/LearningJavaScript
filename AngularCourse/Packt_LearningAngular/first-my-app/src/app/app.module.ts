import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TsIntroductionComponent } from './ts-introduction/ts-introduction.component';
import { TsIntroOopComponent } from './ts-intro-oop/ts-intro-oop.component';
import { TsIntroDecoratorsComponent } from './ts-intro-decorators/ts-intro-decorators.component';

@NgModule({
  declarations: [
    AppComponent,
    TsIntroductionComponent,
    TsIntroOopComponent,
    TsIntroDecoratorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
