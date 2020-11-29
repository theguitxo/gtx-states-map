import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateSelectorComponent } from './state-selector/state-selector.component';

const routes: Routes = [
  {
    path: '',
    component: StateSelectorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StateSelectorRoutingModule { }
