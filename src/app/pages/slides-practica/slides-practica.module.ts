import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesPracticaPageRoutingModule } from './slides-practica-routing.module';

import { SlidesPracticaPage } from './slides-practica.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesPracticaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SlidesPracticaPage]
})
export class SlidesPracticaPageModule {}
