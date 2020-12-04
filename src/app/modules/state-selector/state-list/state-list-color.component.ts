import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ColorOptions } from '../interfaces/state-list.interface';

@Component({
  selector: 'app-state-list-color-component',
  templateUrl: './state-list-color.component.html',
  styleUrls: ['./state-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateListColorComponent implements OnChanges {
  @Input('color') color: ColorOptions;
  @Input('selected') selected: boolean;
  classNames: string[] = [];

  constructor () {}

  ngOnChanges(changes: SimpleChanges) {
    this.classNames = [];
    this.classNames.push(`states-list__color-item--${this.color}`);
    if (changes.selected.currentValue) {
      this.classNames.push(`states-list__color-item--selected`);
    }
  }
}
