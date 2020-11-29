import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateQuizRoutingModule } from './state-quiz-routing.module';
import { StateQuizComponent } from './state-quiz/state-quiz.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [StateQuizComponent],
  imports: [
    CommonModule,
    StateQuizRoutingModule,
    SharedModule,
  ]
})
export class StateQuizModule { }
