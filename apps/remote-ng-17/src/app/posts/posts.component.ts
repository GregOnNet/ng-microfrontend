import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterOutlet],
  template: `
    <h2 class="text-xl font-medium mb-4">Post Titles</h2>
    <div class="grid-cols-2">
      <nav>
        <ul class="list-disc list-inside text-blue-600">
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
      </nav>
      <aside>
        <router-outlet></router-outlet>
      </aside>
    </div>
  `,
})
export class PostsComponent {
  readonly #posts = inject(PostsService);

  protected readonly posts$ = this.#posts.read();
}
