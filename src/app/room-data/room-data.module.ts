import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomDataPageRoutingModule } from './room-data-routing.module';

import { RoomDataPage } from './room-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomDataPageRoutingModule
  ],
  declarations: [RoomDataPage]
})
export class RoomDataPageModule {}
