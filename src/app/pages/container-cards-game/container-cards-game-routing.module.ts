import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerCardsGamePage } from './container-cards-game.page';

const routes: Routes = [
  {
    path: '',
    component: ContainerCardsGamePage,
    children: [
      {
        path: 'init',
        loadChildren: () => import('../init-cards-game/init-cards-game.module').then( m => m.InitCardsGamePageModule),
      },
      {
        path: 'cards-game',
        loadChildren: () => import('../cards-game/cards-game.module').then( m => m.CardsGamePageModule)
      },
      {
        path: 'quiz',
        loadChildren: () => import('../quiz/quiz.module').then( m => m.QuizPageModule)
      },
      {
        path: '',
        redirectTo: 'init'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerCardsGamePageRoutingModule {}
