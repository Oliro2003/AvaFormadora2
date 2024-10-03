import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatosPage } from './fatos.page';

const routes: Routes = [
  {
    path: '',
    component: FatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatosPageRoutingModule {}
