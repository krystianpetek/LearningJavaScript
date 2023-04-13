import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TsIntroductionComponent } from './ts-introduction/ts-introduction.component';
import { TsIntroOopComponent } from './ts-intro-oop/ts-intro-oop.component';
import { TsIntroDecoratorsComponent } from './ts-intro-decorators/ts-intro-decorators.component';
import { TsIntroAdvtypesComponent } from './ts-intro-advtypes/ts-intro-advtypes.component';

@NgModule({
  declarations: [
    AppComponent,
    TsIntroductionComponent,
    TsIntroOopComponent,
    TsIntroDecoratorsComponent,
    TsIntroAdvtypesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
