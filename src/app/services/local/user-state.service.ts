import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  currentUser: UserModel = new UserModel();

  login(user: UserModel) {
    this.currentUser = user;
  }

  logout() {
    this.currentUser = new UserModel();
  }

  isLoggedIn(): boolean {
    return this.currentUser.id != '';
  }

  isAdmin(): boolean {
    return this.currentUser.isAdmin;
  }

  getUsername(): string {
    return this.currentUser.username;
  }

  getUserId(): string {
    return this.currentUser.id;
  }

  getUser(): UserModel {
    return this.currentUser;
  }
}
