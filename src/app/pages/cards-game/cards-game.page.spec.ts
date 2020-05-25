import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardsGamePage } from './cards-game.page';

describe('CardsGamePage', () => {
  let component: CardsGamePage;
  let fixture: ComponentFixture<CardsGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardsGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
