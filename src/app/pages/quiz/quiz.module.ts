import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizPageRoutingModule } from './quiz-routing.module';

import { QuizPage } from './quiz.page';
import { EvalAlternativasPageModule } from '../eval-alternativas/eval-alternativas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPageRoutingModule,
    EvalAlternativasPageModule
  ],
  declarations: [QuizPage]
})
export class QuizPageModule {}
