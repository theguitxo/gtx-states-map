import { ModuleWithProviders, NgModule } from '@angular/core';
import { StatesMapService } from './states-map.service';
import { StatesMapComponent } from './states-map.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StatesMapComponent],
  imports: [CommonModule],
  providers: [StatesMapService],
  exports: [StatesMapComponent]
})
export class StatesMapModule {}
