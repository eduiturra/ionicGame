import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private readonly _user = new BehaviorSubject<User>(null);

  // Expose the observable$ part of the _users subject (read only stream)
  readonly user$ = this._user.asObservable();

  constructor(private readonly authService: AuthService) { }

  // the getter will return the last value emitted in _users subject
  get user(): User {
    return this._user.getValue();
  }

  set user(val: User) {
    this._user.next(val);
  }

  addUser(user: any, token: any) {
    // we assaign a new copy of users by adding a new todo to it 
    // with automatically assigned ID ( don't do this at home, use uuid() )
    this.user = {
      ...this.user,
      user,
      token
    };
  }

  remove() {
    this.user = null;
  }


}
