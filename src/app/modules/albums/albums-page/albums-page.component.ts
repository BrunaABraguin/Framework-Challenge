import { Photo } from "./../../../shared/models/photo";
import { AlbumsService } from "./../albums.service";
import { Component, OnInit } from "@angular/core";
import { Album } from "src/app/shared/models/album";
import { User } from "src/app/shared/models/user";

@Component({
  selector: "app-albums-page",
  templateUrl: "./albums-page.component.html",
  styleUrls: ["./albums-page.component.scss"],
})
export class AlbumsPageComponent implements OnInit {
  constructor(private albumsService: AlbumsService) {}
  albums: Album[];
  albumsUser: Album[];
  users: User[];
  photos: Photo[];
  photosAlbum: Photo[];

  message: string;
  AlbumsUserId: number;
  PhotosAlbumId: number;

  ngOnInit() {
    this.fetchAllAlbums();
    this.fetchAllUsers();
  }

  fetchAllAlbums() {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  fetchAllUsers() {
    this.albumsService.getUsersName().subscribe((data) => {
      this.users = data;
    });
  }

  fetchAllPhotos() {
    this.albumsService.getPhotosAlbum().subscribe((data) => {
      this.photosAlbum = data;
    });
  }

  onUserSelected(albumUserId: any) {
    this.fetchAllPhotos();

    this.albumsService.getAlbumByUser(albumUserId).subscribe((data) => {
      this.albumsUser = data;
    });
  }

  onAlbumSelected(){};
}
