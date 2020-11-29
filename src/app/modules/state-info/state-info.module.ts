import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateInfoRoutingModule } from './state-info-routing.module';
import { StateInfoComponent } from './state-info/state-info.component';
import { SharedModule } from '../shared.module';
import { StateDatasheetComponent } from './state-datasheet/state-datasheet.component';

@NgModule({
  declarations: [
    StateInfoComponent,
    StateDatasheetComponent,
  ],
  imports: [
    CommonModule,
    StateInfoRoutingModule,
    SharedModule,
  ],
})
export class StateInfoModule { }
