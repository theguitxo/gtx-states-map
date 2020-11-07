import { Component } from '@angular/core';
import { StateInfo } from 'projects/states-map/src/lib/state-info';

@Component({
  selector: 'gtx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  selectState(state: StateInfo) {
    console.log(state);
  }
}
