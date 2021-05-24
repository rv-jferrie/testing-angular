import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('https://api.github.com/users/RedVentures/repos');
  }
}
