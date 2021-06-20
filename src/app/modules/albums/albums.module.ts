import { FormsModule } from '@angular/forms';
import { AlbumsService } from './albums.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AlbumsPageComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [AlbumsService]
})
export class AlbumsModule {}
