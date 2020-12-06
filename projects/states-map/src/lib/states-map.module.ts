import { NgModule } from '@angular/core';
import { StatesMapComponent } from './states-map.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StatesMapComponent],
  imports: [CommonModule],
  exports: [StatesMapComponent]
})
export class StatesMapModule {}
