import { FormsModule } from "@angular/forms";
import { TasksService } from "./tasks.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TasksPageComponent } from "./tasks-page/tasks-page.component";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [TasksPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [TasksService],
})
export class TasksModule {}
