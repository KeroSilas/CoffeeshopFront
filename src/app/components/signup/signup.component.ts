import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [UserService],
})
export class SignupComponent {
  data: UserModel[] = [];

  constructor(private service: UserService) {}

  handleAddUser(formData: any) {
    this.addUser(formData.value);
  }

  addUser(user: UserModel) {
    console.log(user);
    let newUser = new UserModel();
    newUser.id = Guid.create().toString();
    newUser.username = user.username;
    newUser.password = user.password;
    newUser.isAdmin = false;
    newUser.firstName = user.firstName;
    newUser.email = user.email;
    newUser.phone = user.phone;
    console.log(newUser);
    this.service.createUser(newUser).subscribe((data: UserModel) => {
      console.log(data);
      this.data.push(data);
    });
  }
}
