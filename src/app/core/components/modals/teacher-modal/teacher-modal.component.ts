import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { EditScheduleModalComponent } from '../edit-schedule-modal/edit-schedule-modal.component';
import { ReserveModalComponent } from '../reserve-modal/reserve-modal.component';

@Component({
  selector: 'app-teacher-modal',
  templateUrl: './teacher-modal.component.html',
  styleUrls: ['./teacher-modal.component.scss']
})
export class TeacherModalComponent implements OnInit {

  @Input() discipline!: Disciplinedto;
  modalOptions: NgbModalOptions

  constructor(public modal: NgbActiveModal, private modalService: NgbModal) {
    this.modalOptions = {
      windowClass: 'dark-modal',
      centered: true
    }
  }

  ngOnInit(): void {
  }

  onOpenModal(discipline: Disciplinedto, mode: string) {
    if(mode === 'reserve'){
      const reserveModal = this.modalService.open(ReserveModalComponent, this.modalOptions);
      reserveModal.componentInstance.discipline = discipline;
    }
    
    if(mode === 'edit'){
      const editModal = this.modalService.open(EditScheduleModalComponent, this.modalOptions);
      editModal.componentInstance.discipline = discipline;
      editModal.componentInstance.role = 'teacher';
    }
  }
}
