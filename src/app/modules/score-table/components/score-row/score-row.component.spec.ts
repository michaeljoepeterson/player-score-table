import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreRowComponent } from './score-row.component';

describe('ScoreRowComponent', () => {
  let component: ScoreRowComponent;
  let fixture: ComponentFixture<ScoreRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
