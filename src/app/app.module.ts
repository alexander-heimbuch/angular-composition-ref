import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DsButtonModule } from './components/button/button.module';
import { DsIconModule } from './components/icon/icon.module';
import { DsCardModule } from './components/card/card.module';
import { DsBulletPointModule } from './components/bullet-point/bullet-point.module';
import { DsPriceModule } from './components/price/price.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DsButtonModule,
    DsIconModule,
    DsCardModule,
    DsBulletPointModule,
    DsPriceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
