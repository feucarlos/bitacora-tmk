import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirmaDesfirmaPage } from './firma-desfirma.page';

const routes: Routes = [
  {
    path: '',
    component: FirmaDesfirmaPage
  },  {
    path: 'admin-fd',
    loadChildren: () => import('./admin-fd/admin-fd.module').then( m => m.AdminFdPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirmaDesfirmaPageRoutingModule {}
