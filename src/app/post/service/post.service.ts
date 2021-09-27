import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  endPoint: string = `https://vue-completecourse.firebaseio.com/posts.json`;

  constructor(private http: HttpClient) {}

  postPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(this.endPoint, post);
  }

  updatePost(post: Post): Observable<Post> {
    const postData = { [post.id]: {title: post.title, description:post.description } };
    return this.http.patch<Post>(this.endPoint, postData);
  }

  deletePost(id: string) {
    return this.http.delete(`https://vue-completecourse.firebaseio.com/posts/${id}.json`);
  }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.endPoint).pipe(
      map((data) => {
        const posts: Post[] = [];
        for (let key in data) {
          posts.push({ ...data[key], id: key });
        }

        return posts;
      })
    );
  }
}
