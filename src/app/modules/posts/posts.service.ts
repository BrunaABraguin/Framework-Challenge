import { Post } from "./../../shared/models/post";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class PostsService {
  API_URL = environment.API_URL;
  constructor(private httpclient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpclient.get(this.API_URL + "/posts");
  }

  getPostsByUser(postsUserId: string): Observable<any> {
    const param = new HttpParams().set("userId", postsUserId);
    return this.httpclient.get(this.API_URL + "/posts", { params: param });
  }

  getCommentsByPost(postId: string): Observable<any> {
    const param = new HttpParams().set("postId", postId);
    return this.httpclient.get(this.API_URL + "/comments", { params: param });
  }

  getUsersName(): Observable<any> {
    return this.httpclient.get(this.API_URL + "/users");
  }

  addPost(postAdd: Post): Observable<any> {
    return this.httpclient.post(this.API_URL + "/posts", postAdd);
  }

  deletePost(post: string): Observable<any> {
    const param = new HttpParams().set("id", post);
    return this.httpclient.delete(this.API_URL + "/posts/" + { params: param });
  }
}
