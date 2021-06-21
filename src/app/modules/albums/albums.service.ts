import { API } from './../../shared/appSettings/API';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Album } from 'src/app/shared/models/album';
import Photo from 'src/app/shared/models/photo';
@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private httpclient: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.httpclient.get(API.API_URL + '/albums');
  }

  getUsersName(): Observable<any> {
    return this.httpclient.get(API.API_URL + '/users');
  }

  getAlbumByUser(albumsUserId: string): Observable<any> {
    const param = new HttpParams().set('userId', albumsUserId);
    return this.httpclient.get(API.API_URL + '/albums', { params: param });
  }

  getPhotosAlbum(): Observable<any> {
    return this.httpclient.get(API.API_URL + '/photos');
  }

  addAlbum(albumAdd: Album): Observable<any> {
    return this.httpclient.post(API.API_URL + '/albums', albumAdd);
  }

  deleteAlbum(): Observable<any> {
    return this.httpclient.delete(API.API_URL + '/todos/1');
  }
}
