import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ScheduleRequest } from '../models/scheduleRequest';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiServerUrl = environment.apiBaseUrl + "/schedule";

  constructor(private http: HttpClient) { }

  public deleteSchedule(scheduleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/id/${scheduleId}`);
  }

  public addSchedule(schedule: ScheduleRequest): Observable<ScheduleRequest> {
    return this.http.post<ScheduleRequest>(`${this.apiServerUrl}`, schedule);
  }
  
}