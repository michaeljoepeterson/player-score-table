import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadTableButtonComponent } from './download-table-button.component';

describe('DownloadTableButtonComponent', () => {
  let component: DownloadTableButtonComponent;
  let fixture: ComponentFixture<DownloadTableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadTableButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadTableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
