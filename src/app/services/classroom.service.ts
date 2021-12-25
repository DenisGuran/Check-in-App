import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ClassroomInfo } from '../models/classroomInfo';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private apiServerUrl = environment.apiBaseUrl + "/classroom";

  constructor(private http: HttpClient) { }

  public getClassroomsLocations(): Observable<ClassroomInfo[]>{
    return this.http.get<ClassroomInfo[]>(`${this.apiServerUrl}/locations`);
  }
}