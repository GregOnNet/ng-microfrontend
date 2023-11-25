import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';

export const routes: Routes = [
  {
    path: '',
    providers: [provideHttpClient(), PostsService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PostsComponent,
      },
    ],
  },
];
