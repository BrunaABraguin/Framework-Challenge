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

  users: User[];
  albumsUser: Album[];
  addAlbum: Album;
  updateAlbum: Album;
  albumPatch: Album;
  message: string;

  AlbumsUserId: number;

  ngOnInit() {
    this.fetchAllAlbums();
    this.fetchAllUsers();

    const albumAdd = new Album();

    albumAdd.title = "A title";
    albumAdd.userId = 1;

    this.albumsService.addAlbum(albumAdd).subscribe((data) => {
      this.addAlbum = data;
    });

    const albumUpdate = new Album();

    albumUpdate.title = "A new title";
    albumUpdate.userId = 1;

    this.albumsService.updateAlbum(albumUpdate).subscribe((data) => {
      this.updateAlbum = data;
    });

    const albumPatch = new Album();

    albumPatch.title = "A newer title";

    this.albumsService.patchAlbum(albumPatch).subscribe((data) => {
      this.albumPatch = data;
    });

    this.albumsService.deleteAlbum().subscribe((data) => {
      this.message = "Álbum deletado com sucesso.";
    });
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

  onUserSelected(albumUserId: any): void {
    this.albumsService.getAlbumByUser(albumUserId).subscribe((data) => {
      this.albumsUser = data;
    });
  }
}