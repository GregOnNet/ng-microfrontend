import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { Post as PostDto } from './post.dto';

@Injectable()
export class PostsService {
  readonly #http = inject(HttpClient);

  read() {
    return this.#http
      .get<PostDto[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((posts) => posts.slice(0, 5)));
  }
}
