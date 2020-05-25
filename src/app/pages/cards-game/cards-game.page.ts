import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { RoomsActivate, SocketService } from '../../services/socket.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TurnoCardsService } from '../../services/turno-cards.service';

@Component({
  selector: 'app-cards-game',
  templateUrl: './cards-game.page.html',
  styleUrls: ['./cards-game.page.scss'],
})
export class CardsGamePage implements OnInit {
  dataUsers: {
    userindex: number;
    username: string;
    userpuntos: number;
    otherindex: number;
    othername: string;
    otherpuntos: number;
  };
  turno: number;
  cartasEnums: any;
  constructor(
    private readonly socketService: SocketService,
    private readonly authService: AuthService,
    private readonly turnoCardsService: TurnoCardsService,
    private router: Router,
  ) { }

  ngOnInit() {
    const username = this.authService.currentUserValue.user.username;
    this.socketService.roomsActivateSubject.subscribe(
      (roomsActivate) => {
        if (roomsActivate) {
          this.turno = this.turnoCardsService.getTurno();
          this.dataUsers = {
            username,
            userindex: roomsActivate.users.findIndex(a => a.username === username),
            userpuntos: roomsActivate.users.find(a => a.username === username).puntos,
            otherindex: roomsActivate.users.findIndex(a => a.username !== username),
            othername: roomsActivate.users.find(a => a.username !== username).username,
            otherpuntos: roomsActivate.users.find(a => a.username !== username).puntos,
          };
          this.cartasEnums = roomsActivate.cartasEnums;
        } else {
          this.router.navigate(['/']);
        }
      }
    );

    this.socketService.eventOpenCard().subscribe(
      (data: any) => {
        this.cambioTurno(data.index);
      }
    );
  }

  changeOpenCard(index: number) {
    const roomsActivate = this.cambioTurno(index);
    this.socketService.sendOpenCard(roomsActivate.roomId, index);
  }
  private cambioTurno(index: number) {
    const roomsActivate = this.socketService.roomsActivateSubject.value;
    roomsActivate.cartasEnums.find(a => a.index === index).abierto = true;
    this.turnoCardsService.changeTurno();
    this.socketService.roomsActivateSubject.next(roomsActivate);
    return roomsActivate;
  }
}
