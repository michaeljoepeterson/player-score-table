import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScorePageComponent } from './player-score-page.component';

describe('PlayerScorePageComponent', () => {
  let component: PlayerScorePageComponent;
  let fixture: ComponentFixture<PlayerScorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerScorePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
