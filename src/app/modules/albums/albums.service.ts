import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Album } from "src/app/shared/models/album";
const { apiURL } = environment;
@Injectable({
  providedIn: "root",
})
export class AlbumsService {

  constructor(private httpclient: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.httpclient.get(`${apiURL}albums`);
  }

  getUsersName(): Observable<any> {
    return this.httpclient.get(`${apiURL}users`);
  }

  getAlbumByUser(albumsUserId: string): Observable<any> {
    const param = new HttpParams().set("userId", albumsUserId);
    return this.httpclient.get(`${apiURL}albums`, { params: param });
  }

  getPhotosAlbum(albumId: string): Observable<any> {
    const param = new HttpParams().set("albumId", albumId);
    return this.httpclient.get(`${apiURL}photos`, { params: param });
  }

  addAlbum(albumAdd: Album): Observable<any> {
    return this.httpclient.post(`${apiURL}albums`, albumAdd);
  }

  deleteAlbum(): Observable<any> {
    return this.httpclient.delete(`${apiURL}todos/1`);
  }
}
