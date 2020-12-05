import { Component } from '@angular/core';
import { State } from 'projects/states-map/src/lib/state-info';
import * as stateList from './state-list.json';
import { StateItem } from './state-quiz.interface';

@Component({
  selector: 'app-state-quiz',
  templateUrl: './state-quiz.component.html',
  styleUrls: ['./state-quiz.component.scss'],
})
export class StateQuizComponent {
  gameStarted = false;
  showResult = false;
  correct: boolean;
  showHowPlayAgain = false;

  stateInfoList: StateItem[] = (<any>stateList).default;
  stateRandom: StateItem;

  constructor() {}

  playGame(): void {
    if (!this.gameStarted) {
      this.showResult = false;
      this.gameStarted = true;
      const randomIndex = Math.round(Math.random() * this.stateInfoList.length);
      this.stateRandom = this.stateInfoList[randomIndex];
    } else if (this.showResult && !this.correct) {
      this.showHowPlayAgain = true;
      this.showResult = false;
    }
  }

  selectState(state: State) {
    console.log(state);
    this.showHowPlayAgain = false;
    if (this.gameStarted) {
      this.showResult = true;
      this.correct = (state.code == this.stateRandom.code);
      if (this.correct) {
        this.gameStarted = false;
      }
    }
  }
}
