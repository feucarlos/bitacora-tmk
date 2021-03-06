import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalidadPage } from './calidad.page';

const routes: Routes = [
  {
    path: '',
    component: CalidadPage
  },
  {
    path: ':do/:id',
    loadChildren: () => import('./calidad.module').then( m => m.CalidadPageModule)
  },
  {
    path: ':do',
    loadChildren: () => import('./calidad.module').then( m => m.CalidadPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalidadPageRoutingModule {}
