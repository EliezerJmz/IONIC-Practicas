import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidingListPage } from './sliding-list.page';

const routes: Routes = [
  {
    path: '',
    component: SlidingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidingListPageRoutingModule {}
