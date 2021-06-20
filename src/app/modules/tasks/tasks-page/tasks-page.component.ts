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
    this.fetchAllUsers();

    const taskAdd = new Task();

    taskAdd.title = "A title";
    taskAdd.userId = 1;

    this.tasksService.addTask(taskAdd).subscribe((data) => {
      this.addTask = data;
    });
  }

  fetchAllTasks() {
    this.tasksService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
  onUserSelected(tasksUserId: any) {
    this.tasksService.getTasksByUser(tasksUserId).subscribe((data) => {
      this.tasksUser = data;
    });
  }

  fetchAllUsers() {
    this.tasksService.getUsersName().subscribe((data) => {
      this.users = data;
    });
  }

  deleteATask(task) {
    this.tasksService.deleteTask(task.id).subscribe(() => {
      const index = this.tasksUser.indexOf(task);

      this.tasksUser.splice(index, 1);

      this.message = "Tarefa deletada com sucesso.";

      console.log(this.message);
    });
  }
}
