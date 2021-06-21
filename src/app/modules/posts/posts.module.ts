import { FormsModule } from "@angular/forms";
import { PostsService } from "./posts.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsPageComponent } from "./posts-page/posts-page.component";
import { HttpClientModule } from "@angular/common/http";
import {
  MatExpansionModule,
  MatAccordion,
  MatSelectModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
} from "@angular/material";
import { AddPostComponent } from './posts-page/add-post/add-post.component';

@NgModule({
  declarations: [PostsPageComponent, AddPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [PostsService],
})
export class PostsModule {}
