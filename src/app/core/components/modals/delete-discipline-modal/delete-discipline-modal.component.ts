import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-delete-discipline-modal',
  templateUrl: './delete-discipline-modal.component.html',
  styleUrls: ['./delete-discipline-modal.component.scss']
})
export class DeleteDisciplineModalComponent implements OnInit {

  @Input() discipline!: Disciplinedto;

  constructor(public modal: NgbActiveModal, private scheduleService: ScheduleService) { }

  ngOnInit(): void {
  }

  public onDeleteSchedule(scheduleId : number): void {
    this.scheduleService.deleteSchedule(scheduleId).subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
