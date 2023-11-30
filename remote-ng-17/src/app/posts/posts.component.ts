import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  template: `
    <div class="text-orange-500">
      <h2 class="text-xl font-medium mb-4">Post Titles</h2>
      <ul class="list-disc list-inside">
        @for(post of posts$ | async; track post.id) {
        <li>
          <a [routerLink]="['/posts', post.id]" class="hover:underline">{{
            post.title
          }}</a>
        </li>
        } @empty {
        <li>No posts found.</li>
        }
      </ul>
    </div>
  `,
})
export class PostsComponent {
  readonly #posts = inject(PostsService);

  protected readonly posts$ = this.#posts.read();
}
