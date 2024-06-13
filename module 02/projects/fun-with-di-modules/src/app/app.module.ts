import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BLANK_TOKEN } from './tokens/blank.token';
import { SecondModule } from './second.module';
import { ThirdModule } from './third.module';

@NgModule({
  imports: [
    BrowserModule,
    SecondModule,
    ThirdModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: BLANK_TOKEN, useValue: 42, multi: true}, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
