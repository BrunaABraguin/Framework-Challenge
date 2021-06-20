import { FormsModule } from "@angular/forms";
import { TasksService } from "./tasks.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TasksPageComponent } from "./tasks-page/tasks-page.component";
import { HttpClientModule } from "@angular/common/http";
import {
  MatCheckboxModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSnackBar,
} from "@angular/material";
import { AddTaskComponent } from "./tasks-page/add-task/add-task.component";
import { DeleteTaskComponent } from "./tasks-page/delete-task/delete-task.component";

@NgModule({
  declarations: [TasksPageComponent, AddTaskComponent, DeleteTaskComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSnackBar,
  ],
  providers: [TasksService],
  entryComponents: [AddTaskComponent, DeleteTaskComponent],
})
export class TasksModule {}
