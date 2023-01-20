import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinationPagePageRoutingModule } from './vaccination-page-routing.module';

import { VaccinationPagePage } from './vaccination-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinationPagePageRoutingModule
  ],
  declarations: [VaccinationPagePage]
})
export class VaccinationPagePageModule {}
