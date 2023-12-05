import { Routes } from '@angular/router';
import { GermanNowComponent } from './german-now.component';
import { PostComponent } from './posts/post.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  {
    path: 'posts',
    pathMatch: 'full',
    redirectTo: 'posts/list',
  },
  {
    path: 'posts/list',
    component: PostsComponent,
  },
  {
    path: 'posts/german-now',
    component: GermanNowComponent,
  },
  {
    path: 'posts/:postId',
    component: PostComponent,
  },
];
