import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ScheduleRequest } from '../models/scheduleRequest';
import { Schedule } from '../models/schedule';
import { ScheduleRequestUpdate } from '../models/ScheduleRequestUpdate';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiServerUrl = environment.apiBaseUrl + "/schedule";

  constructor(private http: HttpClient) { }

  public deleteSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/id/${id}`);
  }

  public addSchedule(schedule: ScheduleRequest): Observable<ScheduleRequest> {
    return this.http.post<ScheduleRequest>(`${this.apiServerUrl}`, schedule);
  }

  public editSchedule(schedule: ScheduleRequestUpdate): Observable<ScheduleRequestUpdate> {
    return this.http.put<ScheduleRequestUpdate>(`${this.apiServerUrl}`, schedule);
  }
  
}