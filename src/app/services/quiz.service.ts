import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private sendAnswerSubject = new BehaviorSubject<string>(null);
  private sendPuntajeSubject = new BehaviorSubject<number>(0);
  private sendPuntajeOtherUserSubject = new BehaviorSubject<number>(0);

  constructor() {}

  sendAnswer(answer: string) {
    this.sendAnswerSubject.next(answer);
  }

  setPuntaje(userPuntaje: number) {
    this.sendPuntajeSubject.next(userPuntaje);
  }
  setOtherPuntaje(userOtherPuntaje: number) {
    this.sendPuntajeOtherUserSubject.next(userOtherPuntaje);
  }

  get Puntaje() {
    return this.sendPuntajeSubject.asObservable();
  }
  get PuntajeOther() {
    return this.sendPuntajeOtherUserSubject.asObservable();
  }

  get Answer() {
    return this.sendAnswerSubject.asObservable();
  }
}
