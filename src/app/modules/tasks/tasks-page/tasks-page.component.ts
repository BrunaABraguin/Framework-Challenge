import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';


@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  constructor(private tasksService: TasksService) { }
  tasks: Task[];
  tasksUser: Task[];
  addTask: Task;
  updateTask: Task;
  taskPatch: Task;
  message: string;

  ngOnInit() {
    this.tasksService.getTasks().subscribe(data => {
      this.tasks = data;
    });

    this.tasksService.getTasksByUser().subscribe(data => {
      this.tasksUser = data;
    });

    const taskAdd = new Task();

    taskAdd.title = 'A title';
    taskAdd.userId = 1;

    this.tasksService.addTask(taskAdd).subscribe(
      data => {
        this.addTask = data;
      }
    );

    const taskUpdate = new Task();

    taskUpdate.title = 'A new title';
    taskUpdate.userId = 1;

    this.tasksService.updateTask(taskUpdate).subscribe(
      data => {
        this.updateTask = data;
      }
    );

    const taskPatch = new Task();

    taskPatch.title = 'A newer title';

    this.tasksService.patchTask(taskPatch).subscribe(
      data => {
        this.taskPatch = data;
      }
    );

    this.tasksService.deleteTask().subscribe(
      data => {
        this.message = 'Tarefa deletada com sucesso.';
      }
    );
  }

}
