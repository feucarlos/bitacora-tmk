import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },  {
    path: 'faltas',
    loadChildren: () => import('../faltas/faltas.module').then( m => m.FaltasPageModule)
  },
  {
    path: 'firma-desfirma',
    loadChildren: () => import('../firma-desfirma/firma-desfirma.module').then( m => m.FirmaDesfirmaPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
