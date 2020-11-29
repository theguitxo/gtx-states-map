import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateInfoComponent } from "./state-info/state-info.component";

const routes: Routes = [
  {
    path: '',
    component: StateInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StateInfoRoutingModule { }
