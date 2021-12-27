import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ReservationRequest } from '../models/reservationRequest';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiServerUrl = environment.apiBaseUrl + "/reservation";

  constructor(private http: HttpClient) { }

  public addReservation(reservation: ReservationRequest): Observable<ReservationRequest> {
    return this.http.post<ReservationRequest>(`${this.apiServerUrl}`, reservation);
  }

  public deleteReservation(reservation: ReservationRequest): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/student/${reservation.studentId}/schedule/${reservation.scheduleId}`);
  }
}