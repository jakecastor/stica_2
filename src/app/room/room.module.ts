import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomPageRoutingModule } from './room-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RoomPage } from './room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomPageRoutingModule,
    NgxQRCodeModule     
  ],
  declarations: [RoomPage]
})
export class RoomPageModule {}
