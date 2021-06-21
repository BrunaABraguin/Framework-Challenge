import { Album } from "./../../../shared/models/album";
import { Photo } from "./../../../shared/models/photo";
import { AlbumsService } from "./../albums.service";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/shared/models/user";

import { MatSnackBar } from "@angular/material";
import { ErrorsComponent } from "src/app/shared/errors/errors.component";

@Component({
  selector: "app-albums-page",
  templateUrl: "./albums-page.component.html",
  styleUrls: ["./albums-page.component.scss"],
})
export class AlbumsPageComponent implements OnInit {
  constructor(
    private albumsService: AlbumsService,
    private _snackBar: MatSnackBar
  ) {}
  albums: Album[];
  albumsUser: Album[];
  users: User[];
  photos: Photo[];
  photosAlbum: Photo[];

  message: string;
  AlbumsUserId: number;
  AlbumId: number;
  PhotosAlbumId: number;

  isSelected: boolean;
  filterSelected: string;

  durationInSeconds = 3;

  ngOnInit() {
    this.fetchAllAlbums();
    this.fetchAllUsers();

    this.filterSelected = "Selecione um Álbum ou Autor";
  }

  fetchAllAlbums() {
    this.albumsService.getAlbums().subscribe(
      (data) => {
        this.albums = data;
      },
      (error: Response) => {
        this._snackBar.openFromComponent(ErrorsComponent, {
          duration: this.durationInSeconds * 1000,
        });


        console.log(error);
      }
    );
  }

  fetchAllUsers() {
    this.albumsService.getUsersName().subscribe(
      (data) => {
        this.users = data;
      },
      (error: Response) => {
        this._snackBar.openFromComponent(ErrorsComponent, {
          duration: this.durationInSeconds * 1000,
        });


        console.log(error);
      }
    );
  }

  onUserSelected(albumUserId) {
    this.filterSelected = "Álbuns";
    this.isSelected = false;
    this.albumsService.getAlbumByUser(albumUserId).subscribe(
      (data) => {
        this.albumsUser = data;
      },
      (error: Response) => {
        this._snackBar.openFromComponent(ErrorsComponent, {
          duration: this.durationInSeconds * 1000,
        });

        console.log(error);
      }
    );
  }

  onAlbumSelected(PhotosAlbumId) {
    this.filterSelected = "Fotos";
    this.isSelected = true;
    this.albumsService.getPhotosAlbum(PhotosAlbumId).subscribe(
      (data) => {
        this.photosAlbum = data;
      },
      (error: Response) => {
        this._snackBar.openFromComponent(ErrorsComponent, {
          duration: this.durationInSeconds * 1000,
        });
        console.log(error);
      }
    );
  }
}
