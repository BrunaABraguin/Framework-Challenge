import { PostsService } from "./../posts.service";
import { Component, OnInit } from "@angular/core";
import Post from "src/app/shared/models/post";
import { User } from "src/app/shared/models/user";

@Component({
  selector: "app-posts-page",
  templateUrl: "./posts-page.component.html",
  styleUrls: ["./posts-page.component.scss"],
})
export class PostsPageComponent implements OnInit {
  constructor(private postsService: PostsService) {}
  posts: Post[];
  users: User[];
  postsUser: Post[];
  addPost: Post;
  updatePost: Post;
  message: string;

  PostsUserId: number;
  isSelected: boolean;

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

  onSubmitCreate(post) {
    const postAdd = new Post();

    postAdd.body = post.body;
    postAdd.title = post.title;
    postAdd.userId = 1;

    this.postsService.addPost(postAdd).subscribe((data) => {
      this.postsUser.splice(0, 0, postAdd);
    });
  }

  updateAPost(post) {
    this.postsService.patchPost(post.id).subscribe((data) => {
      console.log(this.updatePost);
      this.updatePost = data;
    });
  }

  deletePost(post) {
    this.postsService.deletePost(post.id).subscribe(() => {
      const index = this.postsUser.indexOf(post);
      this.postsUser.splice(index, 1);

      this.message = "Postagem deletada com sucesso.";

      console.log(this.message);
    });
  }
}
