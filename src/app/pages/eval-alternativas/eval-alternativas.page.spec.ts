import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalAlternativasPage } from './eval-alternativas.page';

describe('EvalAlternativasPage', () => {
  let component: EvalAlternativasPage;
  let fixture: ComponentFixture<EvalAlternativasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalAlternativasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalAlternativasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
