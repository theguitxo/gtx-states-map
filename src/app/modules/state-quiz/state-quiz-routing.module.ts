import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateQuizComponent } from './state-quiz/state-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: StateQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StateQuizRoutingModule { }
