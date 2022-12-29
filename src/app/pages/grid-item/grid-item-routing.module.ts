import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridItemPage } from './grid-item.page';

const routes: Routes = [
  {
    path: '',
    component: GridItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridItemPageRoutingModule {}
