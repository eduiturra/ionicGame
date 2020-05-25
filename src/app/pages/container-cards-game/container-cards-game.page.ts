import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-container-cards-game',
  templateUrl: './container-cards-game.page.html',
  styleUrls: ['./container-cards-game.page.scss'],
})
export class ContainerCardsGamePage implements OnInit, OnDestroy {
  roomActual: string;
  constructor(
    private readonly socketService: SocketService,
    private readonly authService: AuthService,
  ) { }

  ngOnInit() {
    this.socketService.joinedRoom().subscribe(
      (data: any) => {
        this.roomActual = data.room;
      }
    );
    this.socketService.userDisconectedRoom().subscribe(
      (user) => console.log(`Usuario ${user} se ha desconectado`),
    );
  }
  ngOnDestroy() {
    if (this.roomActual) {
      const username = this.authService.currentUserValue.user.username;
      this.socketService.roomsActivateSubject.next(null);
      this.socketService.leaveRoom(this.roomActual, username);
    }
  }

}
