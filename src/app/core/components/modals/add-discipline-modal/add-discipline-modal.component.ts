import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { DisciplineService } from 'src/app/services/discipline.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-discipline-modal',
  templateUrl: './add-discipline-modal.component.html',
  styleUrls: ['./add-discipline-modal.component.scss']
})
export class AddDisciplineModalComponent implements OnInit {

  teachers!: User[];

  constructor(public modal: NgbActiveModal,
    private formBuilder: FormBuilder, 
    private dataTransferService: DataTransferService, 
    private disciplineService: DisciplineService,
    private userService: UserService
    ) { }

  addForm = this.formBuilder.group({
    name: [''],
    teacherId: [''],
    faculty: [''],
    section: [''],
    year: [''],
    semester: [''],
    credits: ['']
  })

  ngOnInit(): void {
    this.getTeachers();
  }

  public onAddDiscipline(addForm: FormGroup): void {
    this.disciplineService.addDiscipline(addForm.value).subscribe({
      next: _ => {
        this.updateTimetableDay();
        addForm.reset();
        this.modal.dismiss();
      },
      error: (error: HttpErrorResponse) => {
        alert('Discipline already created');
      }
    });
  }

  public updateTimetableDay(): void{
    this.dataTransferService.sendUpdate('Discipline added');
  }

  public getTeachers(): void{
    this.userService.getTeachers().subscribe({
      next: (response: User[]) => {
        this.teachers = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
