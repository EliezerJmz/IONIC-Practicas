import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesPracticaPage } from './slides-practica.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesPracticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesPracticaPageRoutingModule {}
