# StatesMap

# English

## Description

This library includes a SVG image with a map of the Spain provinces.

The user can interact with the provinces clicking over them or marking them as selected.

---

## Parameters

* **showTitles**: to show or not the names of the states on move mouse over it (by default: true).
* **showTitlesOtherCountries**: to show or not the names of the other countries on move mosue over it (by default: false).
* **showOtherCountries**: to show or not other countries (by default: true).
* **includeIslandsStates**: to show or not the states located at islands, Balearic and Canary Islands (by default: true).
* **includeAfricanCities**: to show or not the cities located in Africa (by default: true).
* **useVariantTitle**: to show or not the name of the states with their regional names (by default: false). Not works if showTitles is false.
* **otherCountriesNames**: a list with custom names for the titles of other countries, filled with objects that must contain two values:
  + **id**: identification of the country (can be FRANCE, PORTUGAL or AFRICA).
  + **title**: title to show in the map

  (by default: a void list).
* **changeOnHover**: if the color of the state changes on move mouse over it (by default: true).
* **fillColor**: a CSS valid color for the state (by default: #69F)
* **hoverFillColor**: a CSS valid color for the state on move mouse over it (by default: #6C9).
* **selectorMode**: if the map is in states selection mode (by default: false). This option disables the color change on move the mouse over the states.
* **selectedStates**: a list of the states that must be marked as selected. Is a object list that contains:
  + **code**: code of the state. The codes that use this library are the codes of the INE, you can check them in this url: [INE state codes](https://www.ine.es/daco/daco42/codmun/cod_provincia.htm).
  + **color**: a CSS valid color.

---

## Examples

---

Map showing the name of the other countries

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <gtx-states-map
        [showTitlesOtherCountries]="true">
      </gtx-states-map>
    </div>
  `,
})
export class AppComponent {
}
```

Map in selection mode with the state Barcelona (code '08') selected

````
import { Component } from '@angular/core';
import { SelectedCodes } from 'gtx-states-map/lib/state-info';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <gtx-states-map
        [selectorMode]="true"
        [selectedStates]="selectedStates">
      </gtx-states-map>
    </div>
  `,
})
export class AppComponent {
  selectedStates: SelectedCodes[] = [
    {
      code: '08',
      color: 'red',
    },
  ];
}
````

---

# Español

## Descripción

Esta librería incluye una imagen SVG con un mapa de las provincias de España

El usuario puede interactuar con las provincias pulsando sobre ellas o marcandolas como seleccionadas.

---

## Parámetros

* **showTitles**: para mostrar o no el nombre de las provincias al mover el cursor sobre estas (por defecto: true).
* **showTitlesOtherCountries**: para mostrar o no el nombre de los paises al mover el cursor sobre estos (por defecto: false).
* **showOtherCountries**: para mostrar o no otros países (por defecto: true).
* **includeIslandsStates**: para mostrar o no las provincias situadas en islas, Baleares y Canarias (por defecto: true).
* **includeAfricanCities**: para mostrar o no las ciudades ubicadas en África (por defecto: true).
* **useVariantTitle**: para mostrar o no los nombres regionales de las provincias (por defecto: false). No funciona si showTitles es false.
* **otherCountriesNames**: una lista con nombres para los titulos de otros países, llena con objetos que deben contener dos valores:
  + id: identificador del país (puede ser FRANCIA, PORTUGAL O AFRICA).
  + title: el texto a mostrar en el titulo.

  (por defecto: una lista vacía).
* **changeOnHover**: si ha de cambiar el color de la provincia al mover el ratón sobre esta (por defecto: true).
* **fillColor**: un color CSS válido para la provincia (por defecto: #69F).
* **hoverFillColor**: un color CSS válido para la provincia al pasar el cursor por encima (por defecto: #69F).
* **selectorMode**: si el mapa esta en modo de selección de provincias (por defecto: false). Esta opción deshabilita el cambio de color al mover el ratón encima de la provincia.
* **selectedStates**: una lista de provincias que han de marcarse como seleccionadas. Es una lista de objetos que deben contener:
  + **code**: codigo de la provincia. La lista de códigos que usa esta librería son los códigos del INE, puede consultarlos en esta url: [códigos de provincias del INE](https://www.ine.es/daco/daco42/codmun/cod_provincia.htm).
  + **color**: un color CSS válido.

---

## Ejemplos

Mapa mostrando el nombre de otros paises

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <gtx-states-map
        [showTitlesOtherCountries]="true">
      </gtx-states-map>
    </div>
  `,
})
export class AppComponent {
}
```

Mapa en modo selección con la provincia de Barcelona (código '08') seleccionada

````
import { Component } from '@angular/core';
import { SelectedCodes } from 'gtx-states-map/lib/state-info';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <gtx-states-map
        [selectorMode]="true"
        [selectedStates]="selectedStates">
      </gtx-states-map>
    </div>
  `,
})
export class AppComponent {
  selectedStates: SelectedCodes[] = [
    {
      code: '08',
      color: 'red',
    },
  ];
}
````

---

![](https://raw.githubusercontent.com/theguitxo/gtx-states-map/main/projects/states-map/map-image.png)
