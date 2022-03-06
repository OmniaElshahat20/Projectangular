import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../shared classes and types/IPost';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  url: string = "https://jsonplaceholder.typicode.com/posts";
  GetPosts():Observable<IPost>
  {
    return this.http.get<IPost>(this.url).pipe(catchError((error) => {
      return throwError(()=>error.message ||"your URL is incorrect!")
    }))
  }
}
