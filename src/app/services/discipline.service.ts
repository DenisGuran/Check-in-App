import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DisciplineInfo } from '../models/disciplineInfo';
import { DisciplineRequest } from '../models/disciplineRequest';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  private apiServerUrl = environment.apiBaseUrl + "/discipline";

  constructor(private http: HttpClient) { }

  public getDisciplinesNames(): Observable<DisciplineInfo[]>{
    return this.http.get<DisciplineInfo[]>(`${this.apiServerUrl}/names`);
  }

  public addDiscipline(discipline: DisciplineRequest): Observable<DisciplineRequest> {
    return this.http.post<DisciplineRequest>(`${this.apiServerUrl}`, discipline);
  }
}