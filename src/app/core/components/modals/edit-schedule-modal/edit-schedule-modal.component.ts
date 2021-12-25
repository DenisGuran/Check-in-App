import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { ClassroomService } from 'src/app/services/classroom.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { DisciplineService } from 'src/app/services/discipline.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-edit-schedule-modal',
  templateUrl: './edit-schedule-modal.component.html',
  styleUrls: ['./edit-schedule-modal.component.scss']
})
export class EditScheduleModalComponent implements OnInit {

  @Input() discipline!: Disciplinedto;

  constructor(public modal: NgbActiveModal,
    private formBuilder: FormBuilder, 
    private scheduleService: ScheduleService,
    private dataTransferService: DataTransferService, 
    private disciplineService: DisciplineService,
    private classroomService: ClassroomService
    ) { }

  editForm = this.formBuilder.group({
    disciplineId: [''],
    classroomId: [''],
    day: [''],
    time: ['']
  })

  ngOnInit(): void {
  }

  public onEditSchedule(addForm: FormGroup): void {
    this.scheduleService.addSchedule(addForm.value).subscribe({
      next: _ => {
        this.updateTimetableDay();
        addForm.reset();
        this.modal.dismiss();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
        addForm.reset();
      }
    });
  }

  updateTimetableDay(): void{
    this.dataTransferService.sendUpdate('Schedule Edited');
  }

}
