import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridItemPageRoutingModule } from './grid-item-routing.module';

import { GridItemPage } from './grid-item.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridItemPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GridItemPage]
})
export class GridItemPageModule {}
