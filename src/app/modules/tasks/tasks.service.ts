import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Task } from "src/app/shared/models/task";
import { environment } from "src/environments/environment";
const { apiURL } = environment;
@Injectable({
  providedIn: "root",
})
export class TasksService {
  constructor(private httpclient: HttpClient) {}

  getTasks(): Observable<any> {
    return this.httpclient.get(`${apiURL}/todos`);
  }

  getUsersName(): Observable<any> {
    return this.httpclient.get(`${apiURL}/users`);
  }

  getTasksByUser(tasksUserId: string): Observable<any> {
    const param = new HttpParams().set("userId", tasksUserId);
    return this.httpclient.get(`${apiURL}/todos/`, { params: param });
  }

  addTask(taskAdd: Task): Observable<any> {
    return this.httpclient.post(`${apiURL}/todos`, taskAdd);
  }

  deleteTask(task: number): Observable<any> {
    return this.httpclient.delete(`${apiURL}/todos/` + task);
  }
}
