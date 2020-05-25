import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EvalAlternativasPage } from './eval-alternativas.page';
import { TimerQuizComponent } from './timer-quiz/timer-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: EvalAlternativasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
  ],
  exports: [TimerQuizComponent, EvalAlternativasPage],
  declarations: [EvalAlternativasPage, TimerQuizComponent]
})
export class EvalAlternativasPageModule {}
