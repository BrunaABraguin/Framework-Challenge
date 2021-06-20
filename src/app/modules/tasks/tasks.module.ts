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
} from "@angular/material";
import { AddTaskComponent } from "./tasks-page/add-task/add-task.component";

@NgModule({
  declarations: [TasksPageComponent, AddTaskComponent],
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
  ],
  providers: [TasksService],
  entryComponents: [AddTaskComponent],
})
export class TasksModule {}
