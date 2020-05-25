import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContainerCardsGamePage } from './container-cards-game.page';

describe('ContainerCardsGamePage', () => {
  let component: ContainerCardsGamePage;
  let fixture: ComponentFixture<ContainerCardsGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCardsGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerCardsGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
