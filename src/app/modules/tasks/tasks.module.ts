import { FormsModule } from '@angular/forms';
import { TasksService } from './tasks.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TasksPageComponent } from "./tasks-page/tasks-page.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [TasksPageComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [TasksService]
})
export class TasksModule { }
