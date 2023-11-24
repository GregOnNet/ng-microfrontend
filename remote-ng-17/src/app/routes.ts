import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: PostsComponent },
];
