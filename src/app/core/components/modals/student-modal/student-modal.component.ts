import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { ReserveModalComponent } from '../reserve-modal/reserve-modal.component';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent implements OnInit {

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
  }
}
