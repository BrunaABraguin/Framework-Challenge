import { AlbumsService } from './../albums.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {

  constructor(private albumsService: AlbumsService) { }
  albums: Album[];
  albumsUser: Album[];
  addAlbum: Album;
  updateAlbum: Album;
  albumPatch: Album;
  message: string;

  AlbumUserId: number;

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });

    const albumAdd = new Album();

    albumAdd.title = 'A title';
    albumAdd.userId = 1;

    this.albumsService.addAlbum(albumAdd).subscribe(
      data => {
        this.addAlbum = data;
      }
    );

    const albumUpdate = new Album();

    albumUpdate.title = 'A new title';
    albumUpdate.userId = 1;

    this.albumsService.updateAlbum(albumUpdate).subscribe(
      data => {
        this.updateAlbum = data;
      }
    );

    const albumPatch = new Album();

    albumPatch.title = 'A newer title';

    this.albumsService.patchAlbum(albumPatch).subscribe(
      data => {
        this.albumPatch = data;
      }
    );

    this.albumsService.deleteAlbum().subscribe(
      data => {
        this.message = 'Álbum deletado com sucesso.';
      }
    );
  }

  onUserSelected(albumId: any): void {
    this.albumsService.getAlbumByUser(albumId).subscribe(data => {
      this.albumsUser = data;
    });
  }
}
