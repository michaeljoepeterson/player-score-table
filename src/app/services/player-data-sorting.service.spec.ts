import { TestBed } from '@angular/core/testing';

import { PlayerDataSortingService } from './player-data-sorting.service';

describe('PlayerDataSortingService', () => {
  let service: PlayerDataSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerDataSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
