import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayDateService {

  public getWeekDays(): Array<Date>{
    var currentDate = new Date();
    const daysNumber = 5;
    var week = []

    for (var i = 1; i <= daysNumber; i++) {
      var firstDay = currentDate.getDate() - currentDate.getDay() + i;
      var day = new Date(currentDate.setDate(firstDay));
      week.push(day);
    }

    return week;
  }
}