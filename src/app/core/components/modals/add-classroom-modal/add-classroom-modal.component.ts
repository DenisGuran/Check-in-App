import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClassroomService } from 'src/app/services/classroom.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-add-classroom-modal',
  templateUrl: './add-classroom-modal.component.html',
  styleUrls: ['./add-classroom-modal.component.scss']
})
export class AddClassroomModalComponent implements OnInit {

  constructor(public modal: NgbActiveModal,
    private formBuilder: FormBuilder, 
    private dataTransferService: DataTransferService, 
    private classroomService: ClassroomService
    ) { }

  addForm = this.formBuilder.group({
    location: [''],
    capacity: ['']
  })

  ngOnInit(): void {
  }

  public onAddClassroom(addForm: FormGroup): void {
    this.classroomService.addClassroom(addForm.value).subscribe({
      next: _ => {
        this.updateTimetableDay();
        addForm.reset();
        this.modal.dismiss();
      },
      error: (error: HttpErrorResponse) => {
        alert('Classroom already created');
      }
    });
  }

  public updateTimetableDay(): void{
    this.dataTransferService.sendUpdate('Classroom Added');
  }

}
