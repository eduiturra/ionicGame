import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-timer-quiz',
  templateUrl: './timer-quiz.component.html',
  styleUrls: ['./timer-quiz.component.scss'],
})
export class TimerQuizComponent implements OnInit {
  timer = 0;
  tiempoSegundos: number;
  @Output() timeOut = new EventEmitter();
  interval: any;

  constructor() { }

  ngOnInit() {}

  barTimer(tiempoSegundos: number) {
    this.tiempoSegundos = tiempoSegundos;
    if (this.tiempoSegundos) {
      this.ResetInterval();
      const tiempoIntervalo = 60;
      const tiempoTotal = this.tiempoSegundos * 1000; // 3s
      const velocidad = tiempoIntervalo / tiempoTotal;
      this.interval = setInterval(() => {
        this.timer += velocidad;
        if (this.timer >= 1) {
          this.ResetInterval();
          this.TimeOut();
        }
      }, tiempoIntervalo);
    }
  }

  TimeOut() {
    if (this.tiempoSegundos) {
      this.clear();
      of(true).pipe(
        delay(200)
      ).subscribe(() => {
        this.timeOut.emit();
      });
    }
  }

  ResetInterval() {
    if (this.tiempoSegundos) {
      this.timer = 0;
      this.clear();
    }
  }
  clear() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onMasTiempo() {
      this.ResetInterval();
      of(true).pipe(
            delay(200)
          ).subscribe(() => {
            this.barTimer(this.tiempoSegundos);
          });
    }
}

