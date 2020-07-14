import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'incapacidades',
    loadChildren: () => import('./pages/incapacidades/incapacidades.module').then( m => m.IncapacidadesPageModule)
  },
  {
    path: 'vacaciones',
    loadChildren: () => import('./pages/vacaciones/vacaciones.module').then( m => m.VacacionesPageModule)
  },
  {
    path: 'fallas-homeoffice',
    loadChildren: () => import('./pages/fallas-homeoffice/fallas-homeoffice.module').then( m => m.FallasHomeofficePageModule)
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('./pages/capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'calidad',
    loadChildren: () => import('./pages/calidad/calidad.module').then( m => m.CalidadPageModule)
  },
  {
    path: 'descansos',
    loadChildren: () => import('./pages/descansos/descansos.module').then( m => m.DescansosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
