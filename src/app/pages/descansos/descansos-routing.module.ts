import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescansosPage } from './descansos.page';

const routes: Routes = [
  {
    path: '',
    component: DescansosPage
  },
  {
    path: ':do/:id',
    loadChildren: () => import('./admindescanso/admindescanso.module').then( m => m.AdmindescansoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescansosPageRoutingModule {}
