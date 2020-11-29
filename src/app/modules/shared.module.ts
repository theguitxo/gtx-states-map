import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StatesMapModule } from 'projects/states-map/src/public-api';
import { InfoBoxDirective } from '../directives/info-box.directive';

@NgModule({
  declarations: [
    InfoBoxDirective,
  ],
  imports: [
    StatesMapModule,
    HttpClientModule,
  ],
  exports: [
    StatesMapModule,
    InfoBoxDirective,
  ],
})
export class SharedModule {}
