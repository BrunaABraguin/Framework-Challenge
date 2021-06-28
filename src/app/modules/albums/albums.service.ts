import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Album } from "src/app/shared/models/album";
@Injectable({
  providedIn: "root",
})
export class AlbumsService {
  API_URL = environment.API_URL;

  constructor(private httpclient: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.httpclient.get(this.API_URL + "/albums");
  }

  getUsersName(): Observable<any> {
    return this.httpclient.get(this.API_URL + "/users");
  }

  getAlbumByUser(albumsUserId: string): Observable<any> {
    const param = new HttpParams().set("userId", albumsUserId);
    return this.httpclient.get(this.API_URL + "/albums", { params: param });
  }

  getPhotosAlbum(albumId: string): Observable<any> {
    const param = new HttpParams().set("albumId", albumId);
    return this.httpclient.get(this.API_URL + "/photos", { params: param });
  }

  addAlbum(albumAdd: Album): Observable<any> {
    return this.httpclient.post(this.API_URL + "/albums", albumAdd);
  }

  deleteAlbum(): Observable<any> {
    return this.httpclient.delete(this.API_URL + "/todos/1");
  }
}
