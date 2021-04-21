import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAuthData } from '../interfaces/auth-data';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  authChange= new Subject<boolean>()
  private user: IUser;
  constructor() {}

  registerUser(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };

    this.authChange.next(true);
  }

  login(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: authData.password,
    };
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}
