import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService, RoomsActivate } from '../../services/socket.service';
import { timer, iif, interval } from 'rxjs';
import { take, switchMap, takeWhile, tap, takeUntil } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  timerOutQuiz = true;
  timeOut = 3;
  roomsActivate: RoomsActivate;
  room = '';
  username: string;
  userOtherName: string;
  userId: string;
  showEval = false;
  userPuntaje = 0;
  userOtherPuntaje = 0;
  constructor(
    private socketService: SocketService,
    private readonly authService: AuthService,
    private readonly quizService: QuizService
    ) {}

  ngOnInit() {
    this.username = this.authService.currentUserValue.user.username;
    this.roomsActivate = this.socketService.roomsActivateSubject.value;
    this.room = this.roomsActivate.roomId;
    this.userOtherName = this.roomsActivate.users.find(a => a.username !== this.username).username,
    this.timerQuiz().subscribe(
      (time) => {
        if (time !== 2) {
          this.timeOut -= 1;
        }
      },
      (err) => console.log(err),
      () => {
        this.showEval = true;
        this.timerOutQuiz = false;
      }
    );
    this.socketService.eventOtherResult().subscribe(
      (data: any) => {
        this.quizService.setOtherPuntaje(data.puntaje);
      }
    );
    this.socketService.eventOtherAnswer().subscribe(
      (data: any) => this.quizService.sendAnswer(data.select),
    );
    this.quizService.Puntaje.subscribe(
      (puntaje) => {
        if (puntaje !== 0) {
          this.sumInterval(500).subscribe(
            (data) => this.userPuntaje += 1
          );
        }
      }
    );
    this.quizService.PuntajeOther.subscribe(
      (puntaje) => {
        if (puntaje !== 0) {
          this.sumInterval(500).subscribe(
            (data) => this.userOtherPuntaje += 1
          );
        }
      }
    );
  }

  private timerQuiz() {
    return timer(1000, 1000).pipe(
      take(3),
    );
  }

  sendResult(data: any) {
    let puntaje = 0;
    if (data.correcta) {
      puntaje = 500;
      this.quizService.setPuntaje(puntaje);
    }
    this.socketService.sendQuizResult(this.userId, this.room, data.indice, data.correcta, puntaje);
  }

  sendAnswer(data: any) {
    this.socketService.sendQuizAnswer(this.username, this.room, data);
  }

  private sumInterval(numero: number) {
    return interval(1).pipe(
      takeWhile(val => val < numero)
    );
  }
}
