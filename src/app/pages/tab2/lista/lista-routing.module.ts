import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPage } from './lista.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPage
  },
  {
    path: ':do/:id',
    loadChildren: () => import('../../calidad/calidad.module').then( m => m.CalidadPageModule)
  },
  {
    path: ':do',
    loadChildren: () => import('../../calidad/calidad.module').then( m => m.CalidadPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPageRoutingModule {}
