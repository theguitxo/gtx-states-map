import { Component } from '@angular/core';
import { State } from 'projects/states-map/src/lib/state-info';

@Component({
  selector: 'app-state-info',
  templateUrl: './state-info.component.html',
  styleUrls: ['./state-info.component.scss'],
})
export class StateInfoComponent {
  selectedStateName: string;

  selectState(state: State) {
    this.selectedStateName = state.title;
  }
}
