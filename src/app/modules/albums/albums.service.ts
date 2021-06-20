import { API } from './../../shared/appSettings/API';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Album } from 'src/app/shared/models/album';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpclient: HttpClient) { }

  getAlbums(): Observable<any> {
    return this.httpclient.get(API.API_URL + '/albums');
  }

  getAlbumByUser(albumId: string): Observable<any> {
    const param = new HttpParams().set('userId', albumId);
    return this.httpclient.get(API.API_URL + '/albums', { params: param });
  }

  addAlbum(albumAdd: Album): Observable<any> {
    return this.httpclient.post(API.API_URL + '/albums', albumAdd);
  }

  updateAlbum(albumUpdate: Album): Observable<any> {
    return this.httpclient.put(API.API_URL + '/albums/1', albumUpdate);
  }

  patchAlbum(albumPatch: Album): Observable<any> {
    return this.httpclient.put(API.API_URL + '/todos/1', albumPatch);
  }

  deleteAlbum(): Observable<any> {
    return this.httpclient.delete(API.API_URL + '/todos/1');
  }
}
