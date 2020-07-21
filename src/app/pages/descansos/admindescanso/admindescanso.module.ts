import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmindescansoPageRoutingModule } from './admindescanso-routing.module';

import { AdmindescansoPage } from './admindescanso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmindescansoPageRoutingModule
  ],
  declarations: [AdmindescansoPage]
})
export class AdmindescansoPageModule {}
