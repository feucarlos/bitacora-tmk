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
  },
  {
    path: 'incapacidades',
    loadChildren: () => import('../incapacidades/incapacidades.module').then( m => m.IncapacidadesPageModule)
  },
  {
    path: 'vacaciones',
    loadChildren: () => import('../vacaciones/vacaciones.module').then( m => m.VacacionesPageModule)
  },
  {
    path: 'fallas-homeoffice',
    loadChildren: () => import('../fallas-homeoffice/fallas-homeoffice.module').then( m => m.FallasHomeofficePageModule)
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('../capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'calidad',
    loadChildren: () => import('../calidad/calidad.module').then( m => m.CalidadPageModule)
  },
  {
    path: 'descansos',
    loadChildren: () => import('../descansos/descansos.module').then( m => m.DescansosPageModule)
  },
  {
    path: ':seccion/:do/:id',
    loadChildren: () => import('../editar-item/editar-item.module').then( m => m.EditarItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
