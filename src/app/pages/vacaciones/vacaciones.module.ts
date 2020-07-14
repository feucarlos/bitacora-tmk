import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacacionesPageRoutingModule } from './vacaciones-routing.module';

import { VacacionesPage } from './vacaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacacionesPageRoutingModule
  ],
  declarations: [VacacionesPage]
})
export class VacacionesPageModule {}
