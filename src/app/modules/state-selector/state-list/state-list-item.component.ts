import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorOptions, ColorSelector, StateItem } from '../interfaces/state-list.interface';
import { StateSelectorService } from '../services/state-selector.service';

@Component({
  selector: 'app-state-list-item-component',
  templateUrl: './state-list-item.component.html',
  styleUrls: ['./state-list.component.scss'],
  host: { 'class': 'states-list__item-wrapper' },
})
export class StateListItemComponent implements OnInit, OnDestroy {
  @Input('state') state: StateItem;
  colorRed: ColorOptions = ColorOptions.red;
  colorBlue: ColorOptions = ColorOptions.blue;
  colorGreen: ColorOptions = ColorOptions.green;

  colorSelection: ColorSelector;
  selected: string;

  updateSelection: Subscription;

  constructor(
    private stateSelectorService: StateSelectorService,
  ) {
    this.initSelectionValues();
  }

  ngOnInit(): void {
    this.updateSelection = this.stateSelectorService.updateSelection$.subscribe(
      (code) => {
        if (code !== this.state.code) {
          this.initSelectionValues();
        }
      },
    );
  }

  ngOnDestroy(): void {
    this.updateSelection.unsubscribe();
  }

  private initSelectionValues(): void {
    this.colorSelection = {
      red: false,
      green: false,
      blue: false,
    };
  }

  handlerSelection(color: ColorOptions): void {
    Object.keys(this.colorSelection).map(item => this.colorSelection[item] = item !== color ?  false : !this.colorSelection[color]);
    if (this.colorSelection[color]) {
      this.stateSelectorService.handlerSelection({
        code: this.state.code,
        color,
      });
    } else {
      this.stateSelectorService.handlerSelection(this.state.code);
    }
  }
}
