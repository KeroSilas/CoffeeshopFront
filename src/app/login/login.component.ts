import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {UserLoginModel} from "../models/userlogin.model";
import {UserService} from "../user.service";
import {Guid} from "guid-typescript";
import {UserModel} from "../models/user.model";

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
  user: UserLoginModel = new UserLoginModel();

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
    console.log(formData.value);
    //formData.reset();
  }

  login(user: UserModel) {
    this.service.getUserByUserName(user.userName).subscribe((data: UserModel) => {
      this.user = data;
    });
    console.log(user);
    console.log(this.user);

    if (this.user.userName == user.userName && this.user.password == user.password) {
      alert("Login Successful");
    }

    else {
      alert("Login Failed");
    }
  }

}
