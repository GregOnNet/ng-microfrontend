import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    @if (post$ | async; as post) {
    <pre><code>{{ post | json }}</code></pre>
    } @else {
    <p>Post not loaded yet...</p>
    }
  `,
})
export class PostComponent {
  readonly #posts = inject(PostsService);
  readonly #route = inject(ActivatedRoute);

  readonly #postId$ = this.#route.paramMap.pipe(
    map((params) => +(params.get('postId') ?? '')),
    filter((maybePostId): maybePostId is number => !isNaN(maybePostId))
  );

  protected readonly post$ = this.#postId$.pipe(
    switchMap((postId) => this.#posts.readSingle({ id: postId }))
  );
}
