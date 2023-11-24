import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>Posts</h2>
    <ul>
      @for(post of posts$ | async; track post.id) {
      <li>{{ post.title }}</li>
      } @empty {
      <li>No posts found.</li>
      }
    </ul>
  `,
})
export class PostsComponent {
  readonly #posts = inject(PostsService);

  protected readonly posts$ = this.#posts.read();
}
