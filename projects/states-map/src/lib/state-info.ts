export type OtherCountryID = 'FRANCE' | 'PORTUGAL' | 'AFRICA';

export interface MapItem {
  data: string;
  title: string;
  transform?: string;
}

export interface StateInfo extends MapItem {
  code: string;
  variantTitle: string;
}

export interface OtherCountry extends MapItem {
  id: OtherCountryID;
}

export interface State {
  code: string;
  title: string;
}

export interface CustomOtherCountriesNames {
  id: OtherCountryID;
  title: string;
}
