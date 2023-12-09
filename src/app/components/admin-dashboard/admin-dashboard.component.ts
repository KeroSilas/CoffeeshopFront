import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {UserStateService} from "../../services/user-state.service";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{

  constructor(private router: Router, private userState: UserStateService) {}

  ngOnInit(): void {
    if (!this.userState.isAdmin()) {
      this.router.navigate(['']).then((r) => console.log(r));
    }
  }

}
