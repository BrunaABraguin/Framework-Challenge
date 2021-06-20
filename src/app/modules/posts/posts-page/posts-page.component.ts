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
  postPatch: Post;
  message: string;

  PostsUserId: number;

  ngOnInit() {
    this.fetchAllPosts();
    this.fetchAllUsers();

    const postUpdate = new Post();

    postUpdate.body = "something new in here";
    postUpdate.title = "A new title";
    postUpdate.userId = 1;

    this.postsService.updatePost(postUpdate).subscribe((data) => {
      this.updatePost = data;
    });

    const postPatch = new Post();

    postPatch.title = "A newer title";

    this.postsService.patchPost(postPatch).subscribe((data) => {
      this.postPatch = data;
    });

    this.postsService.deletePost().subscribe((data) => {
      this.message = "Postagem deletada com sucesso.";
    });
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
  onUserSelected(postsUserId: any): void {
    this.postsService.getPostsByUser(postsUserId).subscribe((data) => {
      this.postsUser = data;
    });
  }

  onSubmitCreate(post) {
    console.log(post);

    const postAdd = new Post();

    postAdd.body = post.body;
    postAdd.title = post.title;
    postAdd.userId = 1;

    this.postsService.addPost(postAdd).subscribe((data) => {
      this.addPost = data;
    });
  }
}
