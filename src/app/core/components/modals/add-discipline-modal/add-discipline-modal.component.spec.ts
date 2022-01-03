import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisciplineModalComponent } from './add-discipline-modal.component';

describe('AddDisciplineModalComponent', () => {
  let component: AddDisciplineModalComponent;
  let fixture: ComponentFixture<AddDisciplineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDisciplineModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDisciplineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
