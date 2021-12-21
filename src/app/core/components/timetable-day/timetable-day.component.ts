import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { DisciplinedtoService } from 'src/app/services/disciplinedto.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-timetable-day',
  templateUrl: './timetable-day.component.html',
  styleUrls: ['./timetable-day.component.scss']
})
export class TimetableDayComponent implements OnInit {

  disciplines : Disciplinedto[] = [];
  @Input() today!: Date;
  
  constructor(private disciplinedtoService: DisciplinedtoService) { 
  }

  ngOnInit(): void {
    this.getDisciplineDTOs(this.today);
  }

  public getDisciplineDTOs(today: Date): void{
    var dayFormat: string = today.toString().slice(0,3)
    this.disciplinedtoService.getDisciplineDTOsByDay(dayFormat).subscribe(
      (response: Disciplinedto[]) => {
        this.disciplines = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
