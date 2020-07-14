import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncapacidadesPage } from './incapacidades.page';

const routes: Routes = [
  {
    path: '',
    component: IncapacidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncapacidadesPageRoutingModule {}
