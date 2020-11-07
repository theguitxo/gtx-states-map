import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StatesMapComponent } from './states-map.component';

@NgModule({
  declarations: [StatesMapComponent],
  imports: [
    BrowserModule,
  ],
  exports: [StatesMapComponent]
})
export class StatesMapModule {
}
