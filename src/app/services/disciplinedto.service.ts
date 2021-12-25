import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disciplinedto } from '../models/disciplinedto';

@Injectable({
  providedIn: 'root'
})
export class DisciplinedtoService {

  private apiServerUrl = environment.apiBaseUrl + "/discipline/dto";

  constructor(private http: HttpClient) { }

  public getDisciplineDTOsByDay(day: string): Observable<Disciplinedto[]>{
    return this.http.get<Disciplinedto[]>(`${this.apiServerUrl}/${day}`);
  }

  public getAllDisciplineDTOs(): Observable<Disciplinedto[]>{
    return this.http.get<Disciplinedto[]>(`${this.apiServerUrl}`);
  }
}