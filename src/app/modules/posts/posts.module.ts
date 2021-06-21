import { FormsModule } from "@angular/forms";
import { PostsService } from "./posts.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsPageComponent } from "./posts-page/posts-page.component";
import { HttpClientModule } from "@angular/common/http";
import {
  MatExpansionModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatDialogModule,
} from "@angular/material";
import { AddPostComponent } from "./posts-page/add-post/add-post.component";

@NgModule({
  declarations: [PostsPageComponent, AddPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [PostsService],
  entryComponents: [AddPostComponent],
})
export class PostsModule {}
