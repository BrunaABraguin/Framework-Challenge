import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import Post from 'src/app/shared/models/post';
import { User } from 'src/app/shared/models/user';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { UncompletedComponent } from 'src/app/shared/uncompleted/uncompleted.component';
@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  posts: Post[];
  users: User[];
  postsUser: Post[];
  PostsUserId: number;

  isSelected: boolean;
  title: string;
  body: string;

  durationInSeconds = 3;

  ngOnInit() {
    this.fetchAllPosts();
    this.fetchAllUsers();
  }

  fetchAllPosts() {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  fetchAllUsers() {
    this.postsService.getUsersName().subscribe((data) => {
      this.users = data;
    });
  }

  onUserSelected(postsUserId: any) {
    this.isSelected = true;

    this.postsService.getPostsByUser(postsUserId).subscribe((data) => {
      this.postsUser = data;
    });
  }

  deleteAPost(post) {
    this.postsService.deletePost(post.id).subscribe(() => {
      if (this.isSelected) {
        const index = this.postsUser.indexOf(post);
        this.postsUser.splice(index, 1);
      } else {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }

      this._snackBar.openFromComponent(DeletePostComponent, {
        duration: this.durationInSeconds * 1000,
      });
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: '38rem',
      data: { title: this.title, body: this.body },
    });

    dialogRef.afterClosed().subscribe((result) => {
      const postAdd = new Post();

      if (result != null || (result = '')) {
        if (result[0] == null || result[1] == null) {
          this._snackBar.openFromComponent(UncompletedComponent, {
            duration: this.durationInSeconds * 1000,
          });
        }

        if (result[0] != null && result[1] != null) {
          postAdd.title = result[0];
          postAdd.body = result[1];
          postAdd.userId = 1;
          if (this.isSelected) {
            this.postsUser.splice(0, 0, postAdd);
          } else {
            this.posts.splice(0, 0, postAdd);
          }
        }
      }
    });
  }
}
