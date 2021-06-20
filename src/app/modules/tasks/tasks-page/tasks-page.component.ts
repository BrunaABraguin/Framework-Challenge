import { User } from "./../../../shared/models/user";
import { TasksService } from "./../tasks.service";
import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/shared/models/task";

@Component({
  selector: "app-tasks-page",
  templateUrl: "./tasks-page.component.html",
  styleUrls: ["./tasks-page.component.scss"],
})
export class TasksPageComponent implements OnInit {
  constructor(private tasksService: TasksService) {}

  tasks: Task[];
  users: User[];
  tasksUser: Task[];
  addTask: Task;
  updateTask: Task;
  taskPatch: Task;
  message: string;

  TasksUserId: number;

  ngOnInit() {
    this.fetchAllTasks();

    this.tasksService.getUsersName().subscribe((data) => {
      this.users = data;
    });

    const taskAdd = new Task();

    taskAdd.title = "A title";
    taskAdd.userId = 1;

    this.tasksService.addTask(taskAdd).subscribe((data) => {
      this.addTask = data;
    });

    const taskUpdate = new Task();

    taskUpdate.title = "A new title";
    taskUpdate.userId = 1;

    this.tasksService.updateTask(taskUpdate).subscribe((data) => {
      this.updateTask = data;
    });

    this.tasksService.deleteTask().subscribe((data) => {
      this.message = "Tarefa deletada com sucesso.";
    });
  }

  fetchAllTasks(): void {
    this.tasksService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
  onUserSelected(tasksUserId: any): void {
    this.tasksService.getTasksByUser(tasksUserId).subscribe((data) => {
      this.tasksUser = data;
    });
  }

  changeStatus(task: Task): void {
    const taskPatch = new Task();

    taskPatch.title = "A newer title";

    this.tasksService.patchTask(taskPatch).subscribe((data) => {
      this.taskPatch = data;
    });

    console.log("change");
  }
}
