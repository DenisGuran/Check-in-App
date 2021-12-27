import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClassroomInfo } from 'src/app/models/classroomInfo';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { DisciplineInfo } from 'src/app/models/disciplineInfo';
import { ClassroomService } from 'src/app/services/classroom.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { DisciplineService } from 'src/app/services/discipline.service';
import { DisciplinedtoService } from 'src/app/services/disciplinedto.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-add-schedule-modal',
  templateUrl: './add-schedule-modal.component.html',
  styleUrls: ['./add-schedule-modal.component.scss']
})
export class AddScheduleModalComponent implements OnInit {

  disciplines : DisciplineInfo[] = [];
  classrooms: ClassroomInfo[] = [];

  constructor(public modal: NgbActiveModal,
    private formBuilder: FormBuilder, 
    private scheduleService: ScheduleService,
    private dataTransferService: DataTransferService, 
    private disciplineService: DisciplineService,
    private classroomService: ClassroomService
    ) { }

  addForm = this.formBuilder.group({
    disciplineId: [''],
    classroomId: [''],
    day: [''],
    time: ['']
  })

  ngOnInit(): void {
    this.getDisciplinesNames();
    this.getClassroomsLocations();
  }

  public onAddSchedule(addForm: FormGroup): void {
    this.scheduleService.addSchedule(addForm.value).subscribe({
      next: _ => {
        this.updateTimetableDay();
        addForm.reset();
        this.modal.dismiss();
      },
      error: (error: HttpErrorResponse) => {
        alert('Schedule already created');
      }
    });
  }

  public updateTimetableDay(): void{
    this.dataTransferService.sendUpdate('Schedule Added');
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

}
