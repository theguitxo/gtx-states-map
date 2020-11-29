import { Component } from '@angular/core';
import { State } from 'projects/states-map/src/lib/state-info';
import { StatesMapService } from 'projects/states-map/src/lib/states-map.service';

// http://servicios.ine.es/wstempus/js/ES/DATOS_SERIE/CP445403?nult=1
@Component({
  selector: 'app-state-info',
  templateUrl: './state-info.component.html',
  styleUrls: ['./state-info.component.scss'],
})
export class StateInfoComponent {
  inputState: State;

  constructor(
    private stateMapService: StatesMapService,
  ){}

  selectState(state: State) {
    this.inputState = state;
  }
}
