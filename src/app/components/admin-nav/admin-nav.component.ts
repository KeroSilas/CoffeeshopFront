import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminUsersComponent} from "../admin-users/admin-users.component";

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [CommonModule, AdminUsersComponent],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css',
})
export class AdminNavComponent {}
