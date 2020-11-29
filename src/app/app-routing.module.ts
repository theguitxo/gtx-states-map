import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
} from './components/index';

const routes: Routes = [
  {
    path: 'state-info',
    loadChildren: () => import('./modules/state-info/state-info.module').then(m => m.StateInfoModule),
  },
  {
    path: 'state-quiz',
    loadChildren: () => import('./modules/state-quiz/state-quiz.module').then(m => m.StateQuizModule),
  },
  {
    path: 'state-selector',
    loadChildren: () => import('./modules/state-selector/state-selector.module').then(m => m.StateSelectorModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
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
