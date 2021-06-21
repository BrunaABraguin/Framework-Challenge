import { Album } from "./../../../shared/models/album";
import { Photo } from "./../../../shared/models/photo";
import { AlbumsService } from "./../albums.service";
import { Component, OnInit } from "@angular/core";
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

  isSelected: boolean;

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

  onUserSelected(albumUserId) {
    this.isSelected = false;
    this.albumsService.getAlbumByUser(albumUserId).subscribe((data) => {
      this.albumsUser = data;
    });
  }

  onAlbumSelected(PhotosAlbumId) {
    this.isSelected = true;
    this.albumsService.getPhotosAlbum(PhotosAlbumId).subscribe((data) => {
      this.photosAlbum = data;
    });
  }
}
