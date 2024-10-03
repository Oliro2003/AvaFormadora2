import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FatosPageRoutingModule } from './fatos-routing.module';

import { FatosPage } from './fatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FatosPageRoutingModule
  ],
  declarations: [FatosPage]
})
export class FatosPageModule {}
