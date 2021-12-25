import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-delete-schedule-modal',
  templateUrl: './delete-schedule-modal.component.html',
  styleUrls: ['./delete-schedule-modal.component.scss']
})
export class DeleteScheduleModalComponent implements OnInit {

  @Input() discipline!: Disciplinedto;

  constructor(public modal: NgbActiveModal, private modalService: NgbModal, private scheduleService: ScheduleService, private dataTransferService: DataTransferService) { }

  ngOnInit(): void {
  }

  public onDeleteSchedule(discipline : Disciplinedto): void {
    this.scheduleService.deleteSchedule(discipline.scheduleId).subscribe({
      next: _ => {
        this.updateTimetableDay();
        this.modalService.dismissAll();
      },
      error: _ => {
        alert('Schedule not found');
      }
    });
  }

  updateTimetableDay(): void{
    this.dataTransferService.sendUpdate('Schedule Deleted');
  }

}
