import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private subjectName = new Subject<any>(); 
    
  sendUpdate(message: string) { 
      this.subjectName.next({ text: message }); 
  }

  getUpdate(): Observable<any> { 
      return this.subjectName.asObservable();
  }
}
