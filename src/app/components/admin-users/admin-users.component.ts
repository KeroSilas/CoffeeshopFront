import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/user.model";
import {UserAdminDTOModel} from "../../models/DTOs/userAdminDTO.model";
import {Router, RouterLink} from "@angular/router";
import {UserStateService} from "../../services/local/user-state.service";

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css',
  providers: [UserService],
})
export class AdminUsersComponent implements OnInit {
  data: UserModel[] = [];

  constructor(private router: Router, private userService: UserService, private userState: UserStateService) {}

  ngOnInit(): void {
    if (!this.userState.isAdmin()) {
      this.router.navigate(['']).then((r) => console.log(r));
    }
    this.userService.getUsers().subscribe((data: UserModel[]) => {
      this.data = data;
    });
  }

  updateUser(user: UserModel) {
    let userAdmin = new UserAdminDTOModel();
    userAdmin.isAdmin = !user.isAdmin;
    this.userService
      .updateUser(user.id, userAdmin)
      .subscribe((data: UserAdminDTOModel) => {
        console.log(data);
      });
  }
}
