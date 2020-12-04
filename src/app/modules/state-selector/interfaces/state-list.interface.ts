export interface StateItem {
  code: string;
  name: string;
}

export enum ColorOptions {
  red = 'red',
  green = 'green',
  blue = 'blue',
};

export type ColorSelector = { [key in ColorOptions]?: boolean };
export type ColorCodes = { [key in ColorOptions]?: string };

export interface StateColorSelection {
  code: string;
  color: ColorOptions;
}
