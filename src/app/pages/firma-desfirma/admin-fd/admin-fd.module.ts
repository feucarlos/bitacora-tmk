import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminFdPageRoutingModule } from './admin-fd-routing.module';

import { AdminFdPage } from './admin-fd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminFdPageRoutingModule
  ],
  declarations: [AdminFdPage]
})
export class AdminFdPageModule {}
