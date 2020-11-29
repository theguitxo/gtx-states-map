import { Component } from '@angular/core';
import { Router } from '@angular/router';

export enum Options {
  INFO = 'info',
  QUIZ = 'quiz',
  SELECTOR = 'selector',
};

export interface Option {
  id: Options;
  route: string;
  title: string;
}

@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.scss'],
})
export class OptionsBarComponent {
  optionsList: Option[] = [
    {
      id: Options.INFO,
      route: 'state-info',
      title: 'States Info',
    },
    {
      id: Options.QUIZ,
      route: 'state-quiz',
      title: 'States Quiz',
    },
    {
      id: Options.SELECTOR,
      route: 'state-selector',
      title: 'States Selector',
    },
  ];
  selectedOption: Options;

  constructor(
    private router: Router,
  ) {}

  isSelected(option: Option): boolean {
    return option.id === this.selectedOption;
  }

  selectOption(option: Option): void {
    this.selectedOption = option.id;
    this.router.navigate([option.route]);
  }
}
