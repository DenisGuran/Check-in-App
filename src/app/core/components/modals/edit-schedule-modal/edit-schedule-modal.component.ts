import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClassroomInfo } from 'src/app/models/classroomInfo';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { DisciplineInfo } from 'src/app/models/disciplineInfo';
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
  @Input() role!: string;
  disciplines : DisciplineInfo[] = [];
  classrooms: ClassroomInfo[] = [];

  constructor(public modal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder, 
    private scheduleService: ScheduleService,
    private dataTransferService: DataTransferService, 
    private disciplineService: DisciplineService,
    private classroomService: ClassroomService
    ) { }

  editForm = this.formBuilder.group({
    id: [''],
    disciplineId: [''],
    classroomId: [''],
    day: [''],
    time: ['']
  })

  ngOnInit(): void {
    this.getDisciplinesNames();
    this.getClassroomsLocations();
    this.updateForm(this.editForm);
  }

  public onEditSchedule(editForm: FormGroup): void {
    this.modalService.dismissAll();
    this.scheduleService.editSchedule(editForm.value).subscribe({
      next: _ => {
        this.updateTimetableDay();
        editForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
        editForm.reset();
      }
    });
  }

  public updateTimetableDay(): void{
    this.dataTransferService.sendUpdate('Schedule Edited');
  }

  public getDisciplinesNames(): void{
    this.disciplineService.getDisciplinesNames().subscribe({
      next: (response: DisciplineInfo[]) => {
        this.disciplines = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public getClassroomsLocations(): void{
    this.classroomService.getClassroomsLocations().subscribe({
      next: (response: ClassroomInfo[]) => {
        this.classrooms = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public updateForm(form : FormGroup){
    form.patchValue({
      id: this.discipline.scheduleId.toString(),
      disciplineId: this.discipline.disciplineId.toString(),
      classroomId: this.discipline.classroomId.toString(),
      day: this.discipline.startTime.toString().slice(0,10),
      time: this.discipline.startTime.toString().slice(11,16)
    })
  }

}
