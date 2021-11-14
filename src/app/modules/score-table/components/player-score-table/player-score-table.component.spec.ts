import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScoreTableComponent } from './player-score-table.component';

describe('PlayerScoreTableComponent', () => {
  let component: PlayerScoreTableComponent;
  let fixture: ComponentFixture<PlayerScoreTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerScoreTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
