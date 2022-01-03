import { Component, Input, OnInit } from '@angular/core';
import { Disciplinedto } from 'src/app/models/disciplinedto';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { GuestModalComponent } from '../modals/guest-modal/guest-modal.component';
import { AdminModalComponent } from '../modals/admin-modal/admin-modal.component';
import { StudentModalComponent } from '../modals/student-modal/student-modal.component';
import { TeacherModalComponent } from '../modals/teacher-modal/teacher-modal.component';
@Component({
  selector: 'app-timetable-item',
  templateUrl: './timetable-item.component.html',
  styleUrls: ['./timetable-item.component.scss']
})
export class TimetableItemComponent implements OnInit {

  @Input() discipline!: Disciplinedto;
  @Input() role!: string;
  modalOptions: NgbModalOptions;
  currentHour: number = new Date().getHours();

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      windowClass: 'dark-modal',
      centered: true,
      scrollable: true
    }
  }

  ngOnInit(): void {
    console.log(this.currentHour)
  }

  onOpenModal(discipline: Disciplinedto, role: string) {
    if(role === 'guest'){
      const guestModal = this.modalService.open(GuestModalComponent, this.modalOptions);
      guestModal.componentInstance.discipline = discipline;
    }

    if(role === 'student'){
      const studentModal = this.modalService.open(StudentModalComponent, this.modalOptions);
      studentModal.componentInstance.discipline = discipline;
    }

    if(role === 'teacher'){
      const teacherModal = this.modalService.open(TeacherModalComponent, this.modalOptions);
      teacherModal.componentInstance.discipline = discipline;
    }
    
    if(role === 'admin'){
      const adminModal = this.modalService.open(AdminModalComponent, this.modalOptions);
      adminModal.componentInstance.discipline = discipline;
    }
    
  }

}
