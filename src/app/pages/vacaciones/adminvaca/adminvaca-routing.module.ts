import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminvacaPage } from './adminvaca.page';

const routes: Routes = [
  {
    path: '',
    component: AdminvacaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminvacaPageRoutingModule {}
