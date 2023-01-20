import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomDataPage } from './room-data.page';

const routes: Routes = [
  {
    path: '',
    component: RoomDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomDataPageRoutingModule {}
