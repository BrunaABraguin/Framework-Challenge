import { Post } from "./../../shared/models/post";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
const { apiURL } = environment;
@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private httpclient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpclient.get(`${apiURL}posts`);
  }

  getPostsByUser(postsUserId: string): Observable<any> {
    const param = new HttpParams().set("userId", postsUserId);
    return this.httpclient.get(`${apiURL}posts`, { params: param });
  }

  getCommentsByPost(postId: string): Observable<any> {
    const param = new HttpParams().set("postId", postId);
    return this.httpclient.get(`${apiURL}comments`, { params: param });
  }

  getUsersName(): Observable<any> {
    return this.httpclient.get(`${apiURL}users`);
  }

  addPost(postAdd: Post): Observable<any> {
    return this.httpclient.post(`${apiURL}posts`, postAdd);
  }

  deletePost(post: string): Observable<any> {
    const param = new HttpParams().set("id", post);
    return this.httpclient.delete(`${apiURL}posts`, { params: param });
  }
}
