import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitCardsGamePage } from './init-cards-game.page';

describe('InitCardsGamePage', () => {
  let component: InitCardsGamePage;
  let fixture: ComponentFixture<InitCardsGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitCardsGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitCardsGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
