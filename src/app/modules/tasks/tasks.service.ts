import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API } from './../../shared/appSettings/API';
import { Task } from 'src/app/shared/models/task';

@Injectable({
  providedIn: "root",
})
export class TasksService {
  constructor(private httpclient: HttpClient) {}

  getTasks(): Observable<any> {
    return this.httpclient.get(API.API_URL + "/todos");
  }

  getUsersName(): Observable<any> {
    return this.httpclient.get(API.API_URL + "/users");
  };

  getTasksByUser(tasksUserId: string): Observable<any> {
    const param = new HttpParams().set("userId", tasksUserId);
    return this.httpclient.get(API.API_URL + "/todos", { params: param });
  }

  addTask(taskAdd: Task): Observable<any> {
    return this.httpclient.post(API.API_URL + "/todos", taskAdd);
  }

  updateTask(taskUpdate: Task): Observable<any> {
    return this.httpclient.put(API.API_URL + "/todos/1", taskUpdate);
  }

  patchTask(taskPatch: Task): Observable<any> {
    return this.httpclient.put(API.API_URL + "/todos/1", taskPatch);
  }

  deleteTask(): Observable<any> {
    return this.httpclient.delete(API.API_URL + "/todos/1");
  }
}
