import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { DeleteScheduleModalComponent } from '../delete-schedule-modal/delete-schedule-modal.component';
import { EditScheduleModalComponent } from '../edit-schedule-modal/edit-schedule-modal.component';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss']
})
export class AdminModalComponent implements OnInit {

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
    if(mode === 'delete'){
      const deteleModal = this.modalService.open(DeleteScheduleModalComponent, this.modalOptions);
      deteleModal.componentInstance.discipline = discipline;
    }

    if(mode === 'edit'){
      const editModal = this.modalService.open(EditScheduleModalComponent, this.modalOptions);
      editModal.componentInstance.discipline = discipline;
      editModal.componentInstance.role = 'admin';
    }
    
  }

}
