import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLoginModel } from '../../models/userlogin.model';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { UserStateService } from '../../services/user-state.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService],
})
export class LoginComponent {
  data: UserModel[] = [];

  constructor(
    private service: UserService,
    private userState: UserStateService,
    private router: Router,
  ) {}

  handleLogin(formData: any) {
    this.login(formData.value);
    //formData.reset();
  }

  login(user: UserLoginModel) {
    this.service.getUserByUserName(user.username).subscribe(
      (data: UserModel) => {
        if (data.password == user.password) {
          this.userState.login(data);
          this.router.navigate(['/']).then((r) => console.log(r));
        } else {
          alert('Incorrect password.');
        }
      },
      () => {
        alert('Incorrect username.');
      },
    );
  }
}
