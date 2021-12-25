import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { DisciplinedtoService } from 'src/app/services/disciplinedto.service';

@Component({
  selector: 'app-timetable-day',
  templateUrl: './timetable-day.component.html',
  styleUrls: ['./timetable-day.component.scss']
})
export class TimetableDayComponent implements OnInit {

  disciplines : Disciplinedto[] = [];
  @Input() today!: Date;
  private subscriptionName: Subscription;
  
  constructor(private disciplinedtoService: DisciplinedtoService, private Service: DataTransferService) { 
    this.subscriptionName= this.Service.getUpdate().subscribe
             (_ => {
              this.getDisciplineDTOs(this.today);
             });
  }

  ngOnInit(): void {
    this.getDisciplineDTOs(this.today);
  }

  ngOnDestroy() {
    this.subscriptionName.unsubscribe();
  }

  public getDisciplineDTOs(today: Date): void{
    var dayFormat: string = today.toString().slice(0,3);
    this.disciplinedtoService.getDisciplineDTOsByDay(dayFormat).subscribe({
      next: (response: Disciplinedto[]) => {
        this.disciplines = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }
  
}
