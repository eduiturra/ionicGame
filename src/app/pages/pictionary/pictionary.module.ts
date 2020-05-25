import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PictionaryPageRoutingModule } from './pictionary-routing.module';

import { PictionaryPage } from './pictionary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PictionaryPageRoutingModule
  ],
  declarations: [PictionaryPage]
})
export class PictionaryPageModule {}
