import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl + "/user";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/all`);
  }

  public getStudents(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/role/student`);
  }

  public getTeachers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/role/teacher`);
  }
}
