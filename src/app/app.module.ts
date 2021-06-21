import { TasksModule } from "./modules/tasks/tasks.module";
import { PostsModule } from "./modules/posts/posts.module";
import { AlbumsModule } from "./modules/albums/albums.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from "@angular/material";
import { UncompletedComponent } from "./shared/uncompleted/uncompleted.component";
import { ErrorsComponent } from './shared/errors/errors.component';
@NgModule({
  declarations: [
    AppComponent,
    UncompletedComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AlbumsModule,
    PostsModule,
    TasksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UncompletedComponent, ErrorsComponent],
})
export class AppModule {}
