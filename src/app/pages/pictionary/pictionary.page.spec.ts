import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PictionaryPage } from './pictionary.page';

describe('PictionaryPage', () => {
  let component: PictionaryPage;
  let fixture: ComponentFixture<PictionaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictionaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PictionaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
