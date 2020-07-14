import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FallasHomeofficePage } from './fallas-homeoffice.page';

const routes: Routes = [
  {
    path: '',
    component: FallasHomeofficePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FallasHomeofficePageRoutingModule {}
