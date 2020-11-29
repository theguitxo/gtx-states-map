import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateSelectorRoutingModule } from './state-selector-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StateSelectorRoutingModule,
    SharedModule,
  ]
})
export class StateSelectorModule { }
