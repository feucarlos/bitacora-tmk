import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FallasHomeofficePage } from './fallas-homeoffice.page';

const routes: Routes = [
  {
    path: '',
    component: FallasHomeofficePage
  },
  {
    path: ':do/:id',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: ':do',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FallasHomeofficePageRoutingModule {}
