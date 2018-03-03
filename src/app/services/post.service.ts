import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  // tslint:disable-next-line:member-ordering

 private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
constructor(private http: HttpClient) { }

query(): Observable<Array<any>> {
  return this.http.get(this.baseUrl);
}

}
