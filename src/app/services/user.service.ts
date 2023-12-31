import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserLoginModel } from '../models/userlogin.model';
import { UserAdminDTOModel } from '../models/DTOs/userAdminDTO.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:5245/api/user/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl + 'GetUsers');
  }

  getUserById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.baseUrl + id);
  }

  getUserByUserName(userName: string): Observable<UserModel> {
    return this.http.get<UserModel>(
      this.baseUrl + 'GetUserByUsername/' + userName,
    );
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseUrl, user);
  }

  updateUser(id: string, user: UserAdminDTOModel): Observable<any> {
    return this.http.put(this.baseUrl + id, user);
  }

  deleteUser(id: string): Observable<UserModel> {
    return this.http.delete<UserModel>(this.baseUrl + id);
  }

  login(user: UserLoginModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseUrl + 'login', user);
  }
}
