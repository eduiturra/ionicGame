import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ViewChildren, QueryList,
   AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { TimerQuizComponent } from './timer-quiz/timer-quiz.component';
import { ObjetosQuiz } from '../../models/quiz-data.model';
import { AnimationCollection } from '../../shared/animation-quiz';
import {Renderer2 } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
@Component({
  selector: 'app-eval-alternativas',
  templateUrl: './eval-alternativas.page.html',
  styleUrls: ['./eval-alternativas.page.scss'],
  animations: AnimationCollection.AnimationQuiz
})
export class EvalAlternativasPage implements  OnInit, OnDestroy, AfterViewInit {
  @Input() evaluacion: ObjetosQuiz;
  @Output() sendAnswer = new EventEmitter();
  @Output() sendResult = new EventEmitter();

  @ViewChildren('alternativas') classAlt: QueryList<ElementRef>;
  @ViewChild(TimerQuizComponent, {static: false} ) childTimer: TimerQuizComponent;
  @ViewChildren(TimerQuizComponent) childTimers: QueryList<TimerQuizComponent>;
  private readonly segundosQuiz = 10;
  selected: string;
  correcta: boolean;
  tipo: string;
  indice = 0;
  mostrarCorrecta = false;
  mostrarIncorrecta = false;
  constructor(
     private rd: Renderer2,
     private readonly quizService: QuizService
  ) {}
  ngOnInit(): void {
    this.quizService.Answer.subscribe(
      (data) => {
        if (data) {
          this.setAnswerOther(data);
        }
      }
    );
  }

 ngAfterViewInit() {
  setTimeout(() => {
    this.childTimer.barTimer(this.segundosQuiz);
  }, 0);
   }
   ngOnDestroy() {
    this.childTimer.ResetInterval();
  }
   onRespuesta(altSeleccion: string, element: ElementRef) {
     if (altSeleccion && !this.selected) {
      this.rd.setStyle(element, 'background-color', 'green');
      this.selected = altSeleccion;
      this.sendAnswer.emit(altSeleccion);
    }
  }
  TimeOut() {
    if (this.selected) {
      this.correcta = this.evaluacion.EvalObjeto.EvalPreguntas[this.indice].AltCorrecta.id === this.selected;
      this.guardarValidarAvance(this.correcta, this.selected);
    } else {
      this.guardarValidarAvance(false, null);
    }
}

private guardarValidarAvance(correcta: boolean, altSeleccionado: string) {
  // this.sonidoAlt(correcta);
  this.GuardarPregunta(altSeleccionado, correcta);
  this.showAnser(correcta).subscribe(
    () => this.ValidarAvance()
  );
}
  private ValidarAvance() {
    const siguientePregunta =  this.evaluacion.EvalObjeto.NumPreguntas !== (this.indice + 1);
    if (siguientePregunta) {
      this.selected = null;
      this.correcta = null;
      this.indice++;
      this.childTimer.ResetInterval();
      this.childTimer.barTimer(this.segundosQuiz);
    } else {
      this.finalizar();
    }
  }
  private GuardarPregunta(altSeleccionada: string, correcta: boolean) {
    this.sendResult.emit({indice: this.indice, correcta});
    // this.respuestasService.agregarRespuesta(
    //   this.evaluacion.EvalObjeto.EvalPreguntas[this.indice], altSeleccionada, correcta);
  }

  private setAnswerOther(alt: string) {
    if (alt) {
      const el = this.classAlt.find((element, index) => {
        return element.nativeElement.getAttribute('data-alt') === alt;
      });
      if (el) {
        el.nativeElement.style.background = 'blue';

      }
    }
  }

  private showAnser(correcta: boolean) {
    return of(1).pipe(
      tap(() => {
        if (correcta) {
          this.mostrarCorrecta = true;
        } else {
          this.mostrarIncorrecta = true;
        }
      }),
      delay(1500),
      tap(() => {
        this.mostrarIncorrecta = false;
        this.mostrarCorrecta = false;
      })
    );
  }

  private finalizar() {
    // this.audio.stop('timer');
    // this.respuestasService.agregarFeedback(
    //   this.evaluacion.CodigoGoogleGames, this.evaluacion.EvalObjeto.CodigoObjeto,
    //   this.initConfigQuiz.vidas, this.evaluacion.EvalObjeto.PorcentajeAprobar
    // );
    // if (this.globalProvider.showad) {
    //   this.quizmasterService.showAdSource.next(true);
    //   this.anuncios();
    // } else {
    //   this.globalProvider.showad = true;
    //   this.router.navigate(['../../feedback'], {relativeTo: this.route});
    // }
  }

}
