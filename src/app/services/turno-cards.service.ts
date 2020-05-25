import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurnoCardsService {
  turno: number;
  constructor() {
  }

  getTurno(): number {
    if (this.turno) {
      return this.turno;
    } else {
      this.turno = 0;
      return 0;
    }
  }
  changeTurno(){
    this.turno = this.turno === 0 ? 1 : 0;
  }
}
