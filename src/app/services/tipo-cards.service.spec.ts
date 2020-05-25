import { TestBed } from '@angular/core/testing';

import { TipoCardsService } from './tipo-cards.service';

describe('TipoCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoCardsService = TestBed.get(TipoCardsService);
    expect(service).toBeTruthy();
  });
});
