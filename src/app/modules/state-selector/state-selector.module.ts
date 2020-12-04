import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateSelectorRoutingModule } from './state-selector-routing.module';
import { SharedModule } from '../shared.module';
import { StateSelectorComponent } from './state-selector/state-selector.component';
import { StateListComponent } from './state-list/state-list.component';
import { StateListColorComponent } from './state-list/state-list-color.component';
import { StateListItemComponent } from './state-list/state-list-item.component';
import { StateSelectorService } from './services/state-selector.service';

@NgModule({
  declarations: [
    StateSelectorComponent,
    StateListComponent,
    StateListColorComponent,
    StateListItemComponent,
  ],
  imports: [
    CommonModule,
    StateSelectorRoutingModule,
    SharedModule,
  ],
  providers: [
    StateSelectorService,
  ],
})
export class StateSelectorModule { }
