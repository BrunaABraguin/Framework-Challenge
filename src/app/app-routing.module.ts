import { TasksPageComponent } from './modules/tasks/tasks-page/tasks-page.component';
import { AlbumsPageComponent } from './modules/albums/albums-page/albums-page.component';
import { PostsPageComponent } from './modules/posts/posts-page/posts-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: PostsPageComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: 'tasks', component: TasksPageComponent },
  { path: 'albums', component: AlbumsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
