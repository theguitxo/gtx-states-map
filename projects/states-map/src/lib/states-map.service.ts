import { Injectable } from '@angular/core';
import { OtherCountry, OtherCountryID, StateInfo } from './state-info';
import * as StatesData from './states.json';

interface states {
  iberiaStates: StateInfo[];
  islandStates: StateInfo[];
  africanCities: StateInfo[];
  otherCountry: OtherCountry[];
}

@Injectable({
  providedIn: 'root',
})
export class StatesMapService {
  private statesData: states = {
    iberiaStates: [],
    islandStates: [],
    africanCities: [],
    otherCountry: [],
  };

  constructor() {
    this.initStatesData();
  }

  private initStatesData(): void {
    this.statesData = {
      iberiaStates: StatesData.iberiaStates,
      islandStates: StatesData.islandsStates,
      africanCities: StatesData.islandsStates,
      otherCountry: StatesData.otherCountry.map((item): OtherCountry => ({
        id: item.id as OtherCountryID,
        data: item.data,
        title: item.title,
      })),
    };
  }

  get iberiaStates(): StateInfo[] {
    return this.statesData.iberiaStates;
  }
  get islandStates(): StateInfo[] {
    return this.statesData.islandStates;
  }
  get africanCities(): StateInfo[] {
    return this.statesData.africanCities;
  }
  get otherCountries(): OtherCountry[] {
    return this.statesData.otherCountry;
  }
}
