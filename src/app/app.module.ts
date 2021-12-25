import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/components/home/home.component';
import { TimetableComponent } from './core/components/timetable/timetable.component';
import { TimetableDayComponent } from './core/components/timetable-day/timetable-day.component';
import { TimetableItemComponent } from './core/components/timetable-item/timetable-item.component';
import { HttpClientModule } from '@angular/common/http';
import { GuestModalComponent } from './core/components/modals/guest-modal/guest-modal.component';
import { StudentModalComponent } from './core/components/modals/student-modal/student-modal.component';
import { AdminModalComponent } from './core/components/modals/admin-modal/admin-modal.component';
import { TeacherModalComponent } from './core/components/modals/teacher-modal/teacher-modal.component';
import { DeleteScheduleModalComponent } from './core/components/modals/delete-schedule-modal/delete-schedule-modal.component';
import { ReserveModalComponent } from './core/components/modals/reserve-modal/reserve-modal.component';
import { AddScheduleModalComponent } from './core/components/modals/add-schedule-modal/add-schedule-modal.component';
import { EditScheduleModalComponent } from './core/components/modals/edit-schedule-modal/edit-schedule-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimetableComponent,
    TimetableDayComponent,
    TimetableItemComponent,
    GuestModalComponent,
    StudentModalComponent,
    AdminModalComponent,
    TeacherModalComponent,
    DeleteScheduleModalComponent,
    ReserveModalComponent,
    AddScheduleModalComponent,
    EditScheduleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
