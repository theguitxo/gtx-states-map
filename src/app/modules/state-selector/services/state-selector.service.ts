import { Injectable } from "@angular/core";
import { SelectedCodes } from 'projects/states-map/src/lib/state-info';
import { Observable, Subject } from 'rxjs';
import { ColorCodes, StateColorSelection } from '../interfaces/state-list.interface';

@Injectable({
  providedIn: 'root',
})
export class StateSelectorService {
  private _selectMultiple = false;
  private _selectionItems: StateColorSelection[] = [];
  private _updateSelection: Subject<string> = new Subject();
  private _colors: ColorCodes;

  constructor(){}

  get selectMultiple(): boolean {
    return this._selectMultiple;
  }
  set selectMultiple(value: boolean) {
    if (!value) {
      this.resetToLast();
    }
    this._selectMultiple = value;
  }
  set colors(value: ColorCodes) {
    this._colors = value;
  }
  get updateSelection$(): Observable<string> {
    return this._updateSelection.asObservable();
  }
  get selectionItems(): SelectedCodes[] {
    return this._selectionItems.map((item) => {
      const returnItem: SelectedCodes = {
        code: item.code,
        color: this._colors[item.color],
      };
      return returnItem;
    });
  }

  handlerSelection(selection: StateColorSelection | string): void {
    if (typeof selection === 'string') {
      this.removeFromSelection(selection);
    } else {
      this.addToSelection(selection);
    }
    console.table(this._selectionItems);
  }

  addToSelection(selection: StateColorSelection): void {
    if (this._selectMultiple) {
      if (this._selectionItems.findIndex(item => item.code === selection.code) > -1) {
        this.removeFromSelection(selection.code);
      }
      this._selectionItems.push(selection);
    } else {
      this._selectionItems = [selection];
      this._updateSelection.next(selection.code);
    }
  }

  removeFromSelection(selection: string): void {
    if (this._selectMultiple) {
      this._selectionItems = this._selectionItems.filter(item => item.code !== selection);
    } else {
      this._selectionItems = [];
    }
  }

  resetSelection(): void {
    this._selectionItems = [];
    this._updateSelection.next('');
  }

  resetToLast(): void {
    if (this._selectionItems.length) {
      this._selectionItems = this._selectionItems.slice(-1);
      this._updateSelection.next(this._selectionItems[0].code);
    }
  }
}
