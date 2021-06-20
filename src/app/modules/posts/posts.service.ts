import { Post } from "./../../shared/models/post";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { API } from "./../../shared/appSettings/API";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private httpclient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpclient.get(API.API_URL + "/posts");
  }

  getPostsByUser(postsUserId: string): Observable<any> {
    const param = new HttpParams().set("userId", postsUserId);
    return this.httpclient.get(API.API_URL + "/posts", { params: param });
  }

  getUsersName(): Observable<any> {
    return this.httpclient.get(API.API_URL + "/users");
  }

  addPost(postAdd: Post): Observable<any> {
    return this.httpclient.post(API.API_URL + "/posts", postAdd);
  }

  patchPost(post: string): Observable<any> {
    const param = new HttpParams().set("id", post);

    return this.httpclient.patch(
      API.API_URL + "/posts/" + { params: param },
      JSON.stringify({ isRead: true })
    );
  }

  deletePost(post: string): Observable<any> {
    const param = new HttpParams().set("id", post);
    return this.httpclient.delete(API.API_URL + "/posts/" + { params: param });
  }
}
