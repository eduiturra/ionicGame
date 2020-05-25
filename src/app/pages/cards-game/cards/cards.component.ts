import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { tipoCardsEnum } from 'src/app/enums/tipo-cards.enum';
import { TipoCardsService } from '../../../services/tipo-cards.service';
import { TiposCards } from '../../../models/tipos-cards.model';
import { empty, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() tipoCartas: {
    index: number,
    abierto: boolean
  };
  @Output() changeCards = new EventEmitter();
  dataCard: TiposCards;
  cardRotate = false;
  showModal = false;
  constructor(
    private readonly tipoCardsService: TipoCardsService,
    private readonly socketService: SocketService,
    ) { }

  ngOnInit() {
    this.socketService.eventOpenCard().subscribe(
      (data: any) => {
        if (data.index === this.tipoCartas.index) {
          this.rotateShowModal();
        }
      }
    );
    this.dataCard = this.tipoCardsService.getDataCards(this.tipoCartas.index);
    if (this.tipoCartas.abierto) {
      this.cardRotate = true;
    }
  }

  onCardRotate() {
    if (!this.cardRotate) {
      this.changeCards.emit(this.tipoCartas.index);
      this.rotateShowModal();
    }
  }

  private rotateShowModal() {
    this.cardRotate = true;
    of(1).pipe(
      delay(500)
    ).subscribe(
      () => this.showModal = true,
    );
  }

}
