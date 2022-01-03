import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddClassroomModalComponent } from '../modals/add-classroom-modal/add-classroom-modal.component';
import { AddDisciplineModalComponent } from '../modals/add-discipline-modal/add-discipline-modal.component';
import { AddScheduleModalComponent } from '../modals/add-schedule-modal/add-schedule-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalOptions: NgbModalOptions;
  role : string = "guest";

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      windowClass: 'dark-modal',
      centered: true
    }
  }

  ngOnInit(): void {
  }

  onOpenModal(mode : string) {
    if(mode === 'add-schedule'){
      this.modalService.open(AddScheduleModalComponent, this.modalOptions);
    } 
    if(mode === 'add-discipline'){
      this.modalService.open(AddDisciplineModalComponent, this.modalOptions);
    } 
    if(mode === 'add-classroom'){
      this.modalService.open(AddClassroomModalComponent, this.modalOptions);
    } 
  }

}
