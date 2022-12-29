import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidingListPageRoutingModule } from './sliding-list-routing.module';

import { SlidingListPage } from './sliding-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidingListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SlidingListPage]
})
export class SlidingListPageModule {}
