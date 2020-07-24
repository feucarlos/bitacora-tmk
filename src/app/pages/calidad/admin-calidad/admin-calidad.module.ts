import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCalidadPageRoutingModule } from './admin-calidad-routing.module';

import { AdminCalidadPage } from './admin-calidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCalidadPageRoutingModule
  ],
  declarations: [AdminCalidadPage]
})
export class AdminCalidadPageModule {}
