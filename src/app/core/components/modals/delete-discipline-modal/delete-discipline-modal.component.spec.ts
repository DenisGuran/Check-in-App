import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDisciplineModalComponent } from './delete-discipline-modal.component';

describe('DeleteDisciplineModalComponent', () => {
  let component: DeleteDisciplineModalComponent;
  let fixture: ComponentFixture<DeleteDisciplineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDisciplineModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDisciplineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
