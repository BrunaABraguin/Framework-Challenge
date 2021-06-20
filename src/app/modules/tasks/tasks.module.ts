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
} from "@angular/material";

@NgModule({
  declarations: [TasksPageComponent],
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
  ],
  providers: [TasksService],
})
export class TasksModule {}
