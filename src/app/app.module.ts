import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatesMapModule } from 'projects/states-map/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StatesMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
