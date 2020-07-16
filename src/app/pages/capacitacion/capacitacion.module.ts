import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitacionPageRoutingModule } from './capacitacion-routing.module';

import { CapacitacionPage } from './capacitacion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CapacitacionPage]
})
export class CapacitacionPageModule {}
