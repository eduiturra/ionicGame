import { Component, OnInit, Input } from '@angular/core';
import { TiposCards } from '../../../models/tipos-cards.model';
import { SocketService } from '../../../services/socket.service';
import { tipoCardsEnum } from '../../../enums/tipo-cards.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent implements OnInit {
  @Input()
  dataCard: TiposCards;
  showModal = true;
  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {}

  onClose() {
    this.showModal = false;
    if (this.dataCard.id === tipoCardsEnum.QUIZ || this.dataCard.id === tipoCardsEnum.QUIZ2) {
      this.router.navigate(['/container-cards-game/quiz']);
    }
  }

}
