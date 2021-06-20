import { FormsModule } from '@angular/forms';
import { PostsService } from './posts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [PostsPageComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, MatSelectModule],
  providers: [PostsService],
})
export class PostsModule {}
