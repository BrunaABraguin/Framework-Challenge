import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Task } from "src/app/shared/models/task";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class TasksService {
  API_URL = environment.API_URL;
  constructor(private httpclient: HttpClient) {}

  getTasks(): Observable<any> {
    return this.httpclient.get(this.API_URL + "/todos");
  }

  getUsersName(): Observable<any> {
    return this.httpclient.get(this.API_URL + "/users");
  }

  getTasksByUser(tasksUserId: string): Observable<any> {
    const param = new HttpParams().set("userId", tasksUserId);
    return this.httpclient.get(this.API_URL + "/todos", { params: param });
  }

  addTask(taskAdd: Task): Observable<any> {
    return this.httpclient.post(this.API_URL + "/todos", taskAdd);
  }

  deleteTask(task: string): Observable<any> {
    const param = new HttpParams().set("id", task);
    return this.httpclient.delete(this.API_URL + "/todos/" + { params: param });
  }
}
