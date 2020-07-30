import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminvacaPageRoutingModule } from './adminvaca-routing.module';

import { AdminvacaPage } from './adminvaca.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminvacaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminvacaPage]
})
export class AdminvacaPageModule {}
