import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirmaDesfirmaPage } from './firma-desfirma.page';

const routes: Routes = [
  {
    path: '',
    component: FirmaDesfirmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirmaDesfirmaPageRoutingModule {}
