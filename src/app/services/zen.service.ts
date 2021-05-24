import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZenService {

  constructor(private http: HttpClient) { }

  get() {
    HttpHeaders
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.http.get('https://api.github.com/zen', {
      headers,
      responseType: 'text',
    });
  }
}
