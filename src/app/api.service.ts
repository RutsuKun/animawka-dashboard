import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {map, catchError} from 'rxjs/operators';
import { Anime, UserLogin, UserLogged } from './login/login.component';
import { UserRegister, UserRegistered } from './register/register.component';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<Array<UserLogged>> {
    return this.http.post<Array<UserLogged>>('http://localhost:3000/login', user);
  }
  register(user: UserRegister): Observable<Array<UserRegistered>> {
    return this.http.post<Array<UserRegistered>>('http://localhost:3000/register', user);
  }
  getAnime(): Observable<Array<Anime>> {
    return this.http.get<Array<Anime>>('http://localhost:3000/anime');
  }
}
