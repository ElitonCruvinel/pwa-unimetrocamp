import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  public createTask(newTask: any): Observable<any> {
    return this.http.post("http://www.mocky.io/v2/5d155bdb0e00002b00a112b0",newTask);
  }
}
