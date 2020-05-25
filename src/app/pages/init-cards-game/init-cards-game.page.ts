import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService, RoomsActivate } from '../../services/socket.service';
import { timer, iif, interval } from 'rxjs';
import { take, switchMap, takeWhile, tap, takeUntil, filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-cards-game',
  templateUrl: './init-cards-game.page.html',
  styleUrls: ['./init-cards-game.page.scss'],
})
export class InitCardsGamePage  implements OnInit {
  roomActual: string;
  constructor(
    private readonly socketService: SocketService,
    private readonly authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const username = this.authService.currentUserValue.user.username;
    this.socketService.joinRoom(username);
    this.socketService.readyRoom().subscribe(
      (room) => {
        this.socketService.roomsActivateSubject.next(room);
      }
    );
    this.socketService.roomsActivateSubject.pipe(
      take(2)
    ).subscribe(
      (room) => {
        if (room) {
          this.router.navigate(['/container-cards-game/cards-game']);
        }
      });
  }

}
