import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredefinedCoffeeModel } from '../../models/predefinedCoffee.model';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CoffeeDetailComponent } from '../coffee-detail/coffee-detail.component';
import {UserStateService} from "../../services/user-state.service";
import {CoffeeService} from "../../services/coffee.service";

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CoffeeDetailComponent,
  ],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
  providers: [CoffeeService],
})
export class CoffeeListComponent implements OnInit {
  data: PredefinedCoffeeModel[] = [];

  constructor(private router: Router, private coffeeService: CoffeeService, private userState: UserStateService) {}

  ngOnInit(): void {
    if (!this.userState.isLoggedIn()) {
      this.router.navigate(['login']).then((r) => console.log(r));
    }
    this.coffeeService.getCoffees().subscribe((data: PredefinedCoffeeModel[]) => {
      this.data = data;
    });
  }
}
