import { Component, OnInit } from '@angular/core';
import { StateSelectorService } from '../services/state-selector.service';

@Component({
  selector: 'app-state-selector',
  templateUrl: './state-selector.component.html',
  styleUrls: ['./state-selector.component.scss'],
})
export class StateSelectorComponent implements OnInit {
  constructor(
    public stateSelectorService: StateSelectorService,
  ){}

  ngOnInit(): void {
    this.stateSelectorService.colors = {
      red: 'crimson',
      green: 'chartreuse',
      blue: 'cadetblue',
    };
  }

  setMultiple(value: boolean): void {
    this.stateSelectorService.selectMultiple = value;
  }

  clearSelection(): void {
    this.stateSelectorService.resetSelection();
  }
}
