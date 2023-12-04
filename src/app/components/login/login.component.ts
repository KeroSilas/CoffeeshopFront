import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {UserLoginModel} from "../../models/userlogin.model";
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/user.model";

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

  handleLogin(formData: any) {
    this.login(formData.value);
    //formData.reset();
  }

  login(user: UserLoginModel) {
    this.service.getUserByUserName(user.username).subscribe((data: UserModel) => {
      if (data.password == user.password) {
        if (data.isAdmin) {
          alert("Logged in as an admin.");
        } else {
          alert("Logged in as a user.");
        }
      } else {
        alert("Incorrect password.");
      }
    }, () => {
      alert("Incorrect username.");
    });
  }

}
