import { Routes } from '@angular/router';
import { GermanNowComponent } from './german-now.component';
import { PostComponent } from './posts/post.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  {
    path: 'posts/german-now',
    component: GermanNowComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
    children: [{ path: ':postId', component: PostComponent }],
  },
];
