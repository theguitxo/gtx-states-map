import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StatesMapModule } from 'projects/states-map/src/public-api';
import { AppRoutingModule } from './app-routing.module';

import {
  OptionsBarComponent,
  StateFlagComponent,
  StateInfoComponent,
} from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    StateFlagComponent,
    StateInfoComponent,
    OptionsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StatesMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
