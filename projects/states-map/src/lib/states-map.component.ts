import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { AFRICAN_CITIES, ISLANDS_STATES, OTHER_COUNTRIES, STATES } from './constants';
import { MapItem, State, StateInfo, CustomOtherCountriesNames, OtherCountryID, OtherCountry } from './state-info';
import { StatesMapService } from './states-map.service';

function isValidColor(color: string): boolean {
  const element: HTMLElement = document.createElement('div');
  element.style.fill = color;
  return element.style.fill !== '';
}

@Component({
  selector: 'gtx-states-map',
  templateUrl: './states-map.component.html',
  styleUrls: ['./states-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatesMapComponent implements OnInit {
  @Input('showTitles') showTitles = true;
  @Input('showTitlesOtherCountries') showTitlesOtherCountries = false;
  @Input('showOtherCountries') showOtherCountries = true;
  @Input('includeIslandsStates') includeIslandsStates = true;
  @Input('includeAfricanCities') includeAfricanCities = true;
  @Input('useVariantTitle') useVariantTitle = false;
  @Input('otherCountriesNames') otherCountriesNames;
  @Input('changeOnHover') changeOnHover = true;

  @Input('fillColor') set bgColor(value: string) {
    if (isValidColor(value)) {
      this._fillColor = value;
    }
  }

  @Input('hoverFillColor') set hoverFillColor(value: string) {
    if (isValidColor(value)) {
      this._hoverFillColor = value;
    }
  }

  @Output('selectState') selectStateEvent = new EventEmitter<State>();

  states: StateInfo[];
  otherCountries: OtherCountry[];
  _fillColor: string = '#69F';
  _hoverFillColor: string = '#6C9';

  constructor(
    private statesMapService: StatesMapService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.otherCountries = this.statesMapService.otherCountries;
    this.states = this.statesMapService.iberiaStates;
    if (this.includeIslandsStates) {
      this.states = this.states.concat(this.statesMapService.islandStates);
    }
    if (this.includeAfricanCities) {
      this.states = this.states.concat(this.statesMapService.africanCities);
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

  mouseOver(event: MouseEvent): void {
    if (this.changeOnHover && this._hoverFillColor) {
      this.renderer.setStyle(event.target, 'fill', this._hoverFillColor);
    }
  }

  mouseLeave(event: MouseEvent): void {
    if (this.changeOnHover && this._hoverFillColor) {
      this.renderer.setStyle(event.target, 'fill', this._fillColor);
    }
  }
}
