import { TestBed } from '@angular/core/testing';

import { PlayerFilterService } from './player-filter.service';

describe('PlayerFilterService', () => {
  let service: PlayerFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
