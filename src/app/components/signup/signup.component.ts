import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [UserService],
})
export class SignupComponent {
  data: UserModel[] = [];

  constructor(
    private service: UserService,
    private router: Router,
  ) {}

  handleAddUser(formData: any) {
    this.addUser(formData.value);
  }

  addUser(user: UserModel) {
    let newUser = new UserModel();
    newUser.id = Guid.create().toString();
    newUser.username = user.username;
    newUser.password = user.password;
    newUser.isAdmin = false;
    newUser.firstName = user.firstName;
    newUser.email = user.email;
    newUser.phone = user.phone;
    this.service.createUser(newUser).subscribe((data: UserModel) => {
      this.data.push(data);
      this.router.navigate(['/login']).then((r) => console.log(r));
    });
  }
}
