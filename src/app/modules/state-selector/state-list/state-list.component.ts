import { Component } from '@angular/core';
import * as stateList from './state-list.json';
import { StateItem } from '../interfaces/state-list.interface';

@Component({
  selector: 'app-state-list-component',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.scss'],
})
export class StateListComponent {
  stateInfoList: StateItem[] = (<any>stateList).default;
  constructor() {
  }
}
