import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API } from './../../shared/appSettings/API';
import { Task } from 'src/app/shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  constructor(private httpclient: HttpClient) { }

  getTasks(): Observable<any> {
    return this.httpclient.get(API.API_URL + '/todos');
  }

  getTasksByUser(): Observable<any> {
    const param = new HttpParams().set('userId', '1');
    return this.httpclient.get(API.API_URL + '/todos', { params: param });
  }

  addTask(taskAdd: Task): Observable<any> {
    return this.httpclient.post(API.API_URL + '/todos', taskAdd);
  }

  updateTask(taskUpdate: Task): Observable<any> {
    return this.httpclient.put(API.API_URL + '/todos/1', taskUpdate);
  }

  patchTask(taskPatch: Task): Observable<any> {
    return this.httpclient.put(API.API_URL + '/todos/1', taskPatch);
  }

  deleteTask(): Observable<any> {
    return this.httpclient.delete(API.API_URL + '/todos/1');
  }
}
