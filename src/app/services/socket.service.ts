export interface RoomsActivate {
  roomId: string;
  active: boolean;
  users: [{
    userId: string,
    username: string,
    puntos: number
  }];
  quiz?: ObjetosQuiz;
  cartasEnums?: [{
    index: number,
    abierto: boolean
  }];
}

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { ObjetosQuiz } from '../models/quiz-data.model';
import { CustomSocket } from '../shared/custom-socket';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  roomsActivateSubject = new BehaviorSubject<RoomsActivate>(null);

  constructor(
    private socket: CustomSocket,
    ) { }

  joinRoom(username: string) {
    this.socket.emit('joinRoom', username);
  }
  joinedRoom() {
    return this.socket.fromEvent<any>('joinedRoom');
  }
  readyRoom() {
    return this.socket.fromEvent<any>('readyRoom');
  }
  userDisconectedRoom() {
    return this.socket.fromEvent<string>('userDisconenct');
  }
  leaveRoom(room: string, username: string) {
    this.socket.emit('leaveRoom', {room, username});
  }
  leftRoom() {
    return this.socket.fromEvent('leftRoom');
  }
  sendQuizResult(userId: string, room: string, indexPregunta: number, correcta: boolean, puntaje: number) {
    this.socket.emit('sendQuizResult', {userId, room, indexPregunta, correcta, puntaje});
  }
  eventOtherResult() {
    return this.socket.fromEvent('sendOtherResult');
  }
  sendQuizAnswer(username: string, room: string, select: string) {
    this.socket.emit('sendQuizAnswer', {username, room, select});
  }
  eventOtherAnswer() {
    return this.socket.fromEvent('sendOtherAnswer');
  }
  sendOpenCard(room: string, index: number) {
    this.socket.emit('sendOpenCard', {index, room});
  }
  eventOpenCard() {
    return this.socket.fromEvent('eventOpenCard');
  }

  sendCanvas(room: string, index: number) {
    this.socket.emit('sendOpenCard', {index, room});
  }
  eventCanvas() {
    return this.socket.fromEvent('eventOpenCard');
  }

  sendChat(room: string, index: number) {
    this.socket.emit('sendOpenCard', {index, room});
  }
  eventChat() {
    return this.socket.fromEvent('eventOpenCard');
  }
}
