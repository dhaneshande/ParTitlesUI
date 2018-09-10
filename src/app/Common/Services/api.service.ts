import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {  map, catchError } from 'rxjs/operators';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiEndpoint: string;
  constructor(private http: HttpClient) {
    this.apiEndpoint = environment.apiUrl;
  }

  errorHandler(error: any): void {
    return error;
  }

  get(url: string): Observable<any> {
    return this.http.get(this.apiEndpoint + url).pipe(map((res) => res),
    catchError((e: any) => Observable.throw(this.errorHandler(e))));
  }

  post(url: string, body: any) {
    return this.http.post(this.apiEndpoint + url, body).pipe(map(res => res),
      catchError((e: any) => Observable.throw(this.errorHandler(e))));
  }

}
