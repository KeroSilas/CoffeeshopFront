import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {UserModel} from "../models/user.model";
import {UserService} from "../user.service";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService]
})
export class LoginComponent {

  data: UserModel[] = [];

  constructor(private service: UserService) {
  }

  handleAddUser(formData: any) {
    this.addUser(formData.value);
    formData.reset();
  }

  addUser(user: UserModel) {
    let newUser = new UserModel();
    newUser.id = Guid.create().toString();
    newUser.userName = user.userName
    newUser.password = user.password;
    newUser.email = user.email;
    newUser.firstName = user.firstName;
    newUser.phone = user.phone;
    this.service.createUser(newUser).subscribe((data: UserModel) => {
      console.log(data);
      this.data.push(data);
    });
  }

  handleLogin(formData: any) {
    this.login(formData.value);
    formData.reset();
  }

  login(user: UserModel) {
    this.service.getUserById(user.id).subscribe((data: UserModel) => {
      console.log(data);
      this.data.push(data);
    });
  }

}
