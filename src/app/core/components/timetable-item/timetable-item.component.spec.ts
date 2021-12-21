import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableItemComponent } from './timetable-item.component';

describe('TimetableItemComponent', () => {
  let component: TimetableItemComponent;
  let fixture: ComponentFixture<TimetableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
