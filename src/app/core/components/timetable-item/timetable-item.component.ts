import { Component, Input, OnInit } from '@angular/core';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { GuestModalComponent } from '../modals/guest-modal/guest-modal.component';
import { AdminModalComponent } from '../modals/admin-modal/admin-modal.component';
@Component({
  selector: 'app-timetable-item',
  templateUrl: './timetable-item.component.html',
  styleUrls: ['./timetable-item.component.scss']
})
export class TimetableItemComponent implements OnInit {

  @Input() discipline!: Disciplinedto;
  modalOptions: NgbModalOptions;

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      windowClass: 'dark-modal',
      centered: true
    }
  }

  ngOnInit(): void {
  }

  onOpenModal(discipline: Disciplinedto, role: string) {
    if(role === 'guest'){
      const guestModal = this.modalService.open(GuestModalComponent, this.modalOptions);
      guestModal.componentInstance.discipline = discipline;
    }
    
    if(role === 'admin'){
      const adminModal = this.modalService.open(AdminModalComponent, this.modalOptions);
      adminModal.componentInstance.discipline = discipline;
    }
    
  }

}
