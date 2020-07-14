import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescansosPageRoutingModule } from './descansos-routing.module';

import { DescansosPage } from './descansos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescansosPageRoutingModule
  ],
  declarations: [DescansosPage]
})
export class DescansosPageModule {}
