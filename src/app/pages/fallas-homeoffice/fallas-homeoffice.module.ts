import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FallasHomeofficePageRoutingModule } from './fallas-homeoffice-routing.module';

import { FallasHomeofficePage } from './fallas-homeoffice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FallasHomeofficePageRoutingModule
  ],
  declarations: [FallasHomeofficePage]
})
export class FallasHomeofficePageModule {}
