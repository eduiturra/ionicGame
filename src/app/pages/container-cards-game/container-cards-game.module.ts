import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContainerCardsGamePageRoutingModule } from './container-cards-game-routing.module';

import { ContainerCardsGamePage } from './container-cards-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContainerCardsGamePageRoutingModule
  ],
  declarations: [ContainerCardsGamePage]
})
export class ContainerCardsGamePageModule {}
