import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  // tslint:disable-next-line:member-ordering

 private baseUrl = 'http://localhost:3010/posts';
constructor(private http: HttpClient) { }

query(): Observable<Array<any>> {
 return this.http.get<Array<any>>(this.baseUrl);
}

find(id: any): Observable<any> {
return this.http.get(`${this.baseUrl}/${id}`);
}

 save(data: any): Observable<any> {
   return !data.id ? this.http.post(this.baseUrl, data)
   : this.http.put(`${this.baseUrl}/${data.id}`, data);
  }

  destroy(id: any): Observable<any> { //Vai apresentar status 204
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
