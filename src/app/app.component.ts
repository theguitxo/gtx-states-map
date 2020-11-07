import { Component } from '@angular/core';
import { CustomOtherCountriesNames, FRANCE, StateInfo } from 'projects/states-map/src/lib/state-info';

@Component({
  selector: 'gtx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  otherCountriesNames: CustomOtherCountriesNames[] = [
    {
      id: FRANCE,
      title: 'La France',
    },
  ];

  constructor() {
    console.log(this.otherCountriesNames);
  }

  selectState(state: StateInfo) {
    console.log(state);
  }
}
