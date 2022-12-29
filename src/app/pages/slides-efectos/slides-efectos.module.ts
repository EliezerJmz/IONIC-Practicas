import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesEfectosPageRoutingModule } from './slides-efectos-routing.module';

import { SlidesEfectosPage } from './slides-efectos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesEfectosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SlidesEfectosPage]
})
export class SlidesEfectosPageModule {}
