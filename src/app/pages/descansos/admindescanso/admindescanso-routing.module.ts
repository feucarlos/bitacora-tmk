import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmindescansoPage } from './admindescanso.page';

const routes: Routes = [
  {
    path: '',
    component: AdmindescansoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmindescansoPageRoutingModule {}
