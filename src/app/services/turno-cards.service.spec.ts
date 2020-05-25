import { TestBed } from '@angular/core/testing';

import { TurnoCardsService } from './turno-cards.service';

describe('TurnoCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurnoCardsService = TestBed.get(TurnoCardsService);
    expect(service).toBeTruthy();
  });
});
