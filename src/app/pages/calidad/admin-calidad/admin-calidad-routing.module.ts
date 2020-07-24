import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCalidadPage } from './admin-calidad.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCalidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCalidadPageRoutingModule {}
