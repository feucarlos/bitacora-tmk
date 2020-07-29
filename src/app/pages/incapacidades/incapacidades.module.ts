import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncapacidadesPageRoutingModule } from './incapacidades-routing.module';

import { IncapacidadesPage } from './incapacidades.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncapacidadesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IncapacidadesPage]
})
export class IncapacidadesPageModule {}
