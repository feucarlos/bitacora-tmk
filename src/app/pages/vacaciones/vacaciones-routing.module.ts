import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacacionesPage } from './vacaciones.page';

const routes: Routes = [
  {
    path: '',
    component: VacacionesPage
  },
  {
    path: ':do/:id',
    loadChildren: () => import('./adminvaca/adminvaca.module').then( m => m.AdminvacaPageModule)
  },
  {
    path: ':do',
    loadChildren: () => import('./adminvaca/adminvaca.module').then( m => m.AdminvacaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacacionesPageRoutingModule {}
