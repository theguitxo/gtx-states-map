import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface options {
  [key: string]: string;
}

const OPTIONS: options = {
  INFO: 'info',
  QUIZ: 'quiz',
};

@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.scss'],
})
export class OptionsBarComponent {
  optionsList: options = OPTIONS;
  selectedOption: string = OPTIONS.INFO;

  constructor(
    private router: Router,
  ) {}

  isSelected(option: string): boolean {
    return option === this.selectedOption;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.router.navigate([this.getRoute(option)]);
  }

  private getRoute(option: string): string {
    const routes = {
      [OPTIONS.INFO]: 'state-info',
      [OPTIONS.QUIZ]: 'state-quiz',
    };

    return routes[option];
  }
}
