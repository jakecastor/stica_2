import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinationPagePage } from './vaccination-page.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccinationPagePageRoutingModule {}
