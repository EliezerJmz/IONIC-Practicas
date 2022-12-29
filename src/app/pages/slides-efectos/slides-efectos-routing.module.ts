import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesEfectosPage } from './slides-efectos.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesEfectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesEfectosPageRoutingModule {}
