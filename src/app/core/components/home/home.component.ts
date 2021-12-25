import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddScheduleModalComponent } from '../modals/add-schedule-modal/add-schedule-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalOptions: NgbModalOptions;

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      windowClass: 'dark-modal',
      centered: true
    }
  }

  ngOnInit(): void {
  }

  onOpenModal(mode : string) {
    if(mode === 'add'){
      const guestModal = this.modalService.open(AddScheduleModalComponent, this.modalOptions);
    } 
  }

}
