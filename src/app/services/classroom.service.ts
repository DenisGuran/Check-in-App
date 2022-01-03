import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ClassroomInfo } from '../models/classroomInfo';
import { ClassroomRequest } from '../models/classroomRequest';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private apiServerUrl = environment.apiBaseUrl + "/classroom";

  constructor(private http: HttpClient) { }

  public getClassroomsLocations(): Observable<ClassroomInfo[]>{
    return this.http.get<ClassroomInfo[]>(`${this.apiServerUrl}/locations`);
  }

  public addClassroom(classroom: ClassroomRequest): Observable<ClassroomRequest> {
    return this.http.post<ClassroomRequest>(`${this.apiServerUrl}`, classroom);
  }
}