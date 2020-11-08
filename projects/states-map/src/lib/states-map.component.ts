import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AFRICAN_CITIES, ISLANDS_STATES, OTHER_COUNTRIES, STATES } from './constants';
import { MapItem, State, StateInfo, CustomOtherCountriesNames, OtherCountryID } from './state-info';

@Component({
  selector: 'gtx-states-map',
  templateUrl: './states-map.component.html',
  styleUrls: ['./states-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatesMapComponent implements OnInit {
  @Input('showTitles') showTitles = true;
  @Input('showOtherCountries') showOtherCountries = true;
  @Input('includeIslandsStates') includeIslandsStates = true;
  @Input('includeAfricanCities') includeAfricanCities = true;
  @Input('useVariantTitle') useVariantTitle = false;
  @Input('otherCountriesNames') otherCountriesNames;

  @Output('selectState') selectStateEvent = new EventEmitter<State>();

  states: StateInfo[];
  otherCountries: MapItem[];

  constructor() { }

  ngOnInit(): void {
    this.otherCountries = OTHER_COUNTRIES;
    this.states = STATES;
    if (this.includeIslandsStates) {
      this.states = this.states.concat(ISLANDS_STATES);
    }
    if (this.includeAfricanCities) {
      this.states = this.states.concat(AFRICAN_CITIES);
    }
  }

  sendStateInfo(state: StateInfo): void {
    const emitState: State = {
      code: state.code,
      title: this.useVariantTitle ? state.variantTitle : state.title,
    };
    this.selectStateEvent.emit(emitState);
  }

  getStateTitle(state: StateInfo): string {
    return this.useVariantTitle ? state.variantTitle : state.title;
  }

  /**
   * @description
   * returns the name for the other countries (France, Portugal,
   * Africa -isn't a country, but I included it in this list)
   * to show in the title of the elements in the map.
   * 
   * @param countryID Identificator in the list of other countries
   * 
   * @returns string the name of the country to show in the map
   */
  getOtherCountryName(countryID: OtherCountryID): string {
    let title: string;
    if (this.otherCountriesNames) {
      title = this.otherCountriesNames.find(item => item.id === countryID)?.title;
    }
    if (!title) {
      title = OTHER_COUNTRIES.find(item => item.id === countryID).title;
    }
    return title;
  }
}
