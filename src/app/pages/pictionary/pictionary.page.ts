import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Input, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import { Platform, IonContent } from '@ionic/angular';
import { Chat } from '../../models/chat.model';

@Component({
  selector: 'app-pictionary',
  templateUrl: './pictionary.page.html',
  styleUrls: ['./pictionary.page.scss'],
})
export class PictionaryPage {
  @ViewChild('myCanvas') public canvas: ElementRef;
  @ViewChild('chatContent', { static: true }) chatContent: IonContent;
  private cx: CanvasRenderingContext2D;
  textosChat: Chat[] = [];
  constructor(
    public platform: Platform,
    public renderer: Renderer2
  ) {

  }

  ionViewDidEnter() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.renderer.setAttribute(canvasEl, 'width', this.platform.width() + '');
    this.renderer.setAttribute(canvasEl, 'height', 300 + '');
    this.cx = canvasEl.getContext('2d');

    // canvasEl.width = this.width;
    // canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    this.captureEvents(canvasEl);
  }
  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              // we'll stop (and unsubscribe) once the user releases the mouse
              // this will trigger a 'mouseup' event    
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(canvasEl, 'mouseleave')),
              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point    
              pairwise()
            )
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };
        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };
        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.cx) { return; }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

  onInput(input: any) {
    this.agregarTexto(input.value, 'eduardo');
    input.value = '';
  }

  private agregarTexto(text: string, user: string) {
    this.textosChat.push({
      texto: text,
      user,
      fecha: new Date()
    });
    this.chatContent.scrollToBottom(400);
  }

}
