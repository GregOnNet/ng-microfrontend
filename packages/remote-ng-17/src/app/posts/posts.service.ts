import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post as PostDto } from './post.dto';

@Injectable({ providedIn: 'root' })
export class PostsService {
  readonly #http = inject(HttpClient);

  read(): Observable<PostDto[]> {
    return this.#http
      .get<PostDto[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((posts) => posts.slice(0, 5)));
  }

  readSingle(post: Pick<PostDto, 'id'>): Observable<PostDto> {
    return this.#http.get<PostDto>(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
  }
}
