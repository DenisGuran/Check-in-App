import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { TimetableDayComponent } from './core/components/timetable-day/timetable-day.component';
import { TimetableItemComponent } from './core/components/timetable-item/timetable-item.component';
import { TimetableComponent } from './core/components/timetable/timetable.component';


const routes: Routes = [
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'item',
    component: TimetableItemComponent
  },
  {
    path: 'day',
    component: TimetableDayComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
