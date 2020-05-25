import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Register, User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private baseUrl: string = environment.API_URL;
  private apiLogin = environment.API_LOGIN;
  private apiRegister = environment.API_REGISTER;
  constructor(
    private http: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser'))),
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
        return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(`${this.baseUrl + this.apiLogin}`, { username, password })
          .pipe(
            map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

  registerUser(register: Register) {
    return this.http.post(`${this.baseUrl + this.apiRegister}`, register);
  }
}
