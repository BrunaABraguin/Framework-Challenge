import { User } from "./../../../shared/models/user";
import { TasksService } from "./../tasks.service";
import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/shared/models/task";
import { MatDialog } from "@angular/material";

import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
  selector: "app-tasks-page",
  templateUrl: "./tasks-page.component.html",
  styleUrls: ["./tasks-page.component.scss"],
})
export class TasksPageComponent implements OnInit {
  constructor(private tasksService: TasksService, public dialog: MatDialog) {}

  tasks: Task[];
  users: User[];
  tasksUser: Task[];
  updateTask: Task;
  taskPatch: Task;
  message: string;
  TasksUserId: number;
  isSelected: boolean;

  title: string;

  ngOnInit() {
    this.fetchAllTasks();
    this.fetchAllUsers();
  }

  fetchAllTasks() {
    this.tasksService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  onUserSelected(tasksUserId: any) {
    this.isSelected = true;
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

      setTimeout(() => {
        this.message = null;
      }, 3000);

      console.log(this.message);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      data: { title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      const taskAdd = new Task();

      if (result != null) {
        taskAdd.title = result;
        taskAdd.userId = 1;
        taskAdd.completed = false;

        this.tasksUser.splice(0, 0, taskAdd);
      }
    });
  }
}
