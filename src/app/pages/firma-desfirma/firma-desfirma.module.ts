import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirmaDesfirmaPageRoutingModule } from './firma-desfirma-routing.module';

import { FirmaDesfirmaPage } from './firma-desfirma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirmaDesfirmaPageRoutingModule
  ],
  declarations: [FirmaDesfirmaPage]
})
export class FirmaDesfirmaPageModule {}
