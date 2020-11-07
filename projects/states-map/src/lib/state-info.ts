export interface MapItem {
  data: string;
  title: string;
  transform?: string;
}

export interface StateInfo extends MapItem {
  code: string;
  variantTitle: string;
}

export interface State {
  code: string;
  title: string;
}

export interface OtherCountriesNames {
  france: string;
  portugal: string;
  afica: string;
}
