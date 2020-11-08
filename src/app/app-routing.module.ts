import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  StateInfoComponent,
  StateQuizComponent,
} from './components/index';

const routes: Routes = [
  {
    path: 'state-info',
    component: StateInfoComponent,
  },
  {
    path: 'state-quiz',
    component: StateQuizComponent,
  },
  {
    path: '',
    redirectTo: 'state-info',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
