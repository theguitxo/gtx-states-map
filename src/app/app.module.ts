import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StatesMapModule } from 'projects/states-map/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StatesMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
