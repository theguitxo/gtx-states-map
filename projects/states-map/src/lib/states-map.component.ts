import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AFRICAN_CITIES, ISLANDS_STATES, OTHER_COUNTRIES, STATES } from './constants';
import { MapItem, OtherCountriesNames, State, StateInfo } from './state-info';

type otherCountry = 'france' | 'portugal' | 'africa';
@Component({
  selector: 'gtx-states-map',
  templateUrl: './states-map.component.html',
  styleUrls: ['./states-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatesMapComponent implements OnInit {
  @Input('showOtherCountries') showOtherCountries = true;
  @Input('includeIslandsStates') includeIslandsStates = true;
  @Input('includeAfricanCities') includeAfricanCities = true;
  @Input('useVariantTitle') useVariantTitle = false;
  @Input('otherCountriesNames') otherCountriesNames: OtherCountriesNames;

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

  showStateInfo(state: StateInfo): void {
    const emitState: State = {
      code: state.code,
      title: this.useVariantTitle ? state.variantTitle : state.title,
    };
    this.selectStateEvent.emit(emitState);
  }

  getStateTitle(state: StateInfo): string {
    return this.useVariantTitle ? state.variantTitle : state.title;
  }

  getOtherCountriesTitle(otherCountryName:)
}
