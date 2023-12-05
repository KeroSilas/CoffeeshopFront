import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeModel } from '../../models/coffee.model';

@Component({
  selector: 'app-coffee-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './coffee-detail.component.html',
  styleUrl: './coffee-detail.component.css',
  providers: [CoffeeService],
})
export class CoffeeDetailComponent implements OnInit {
  coffee: CoffeeModel = new CoffeeModel();

  constructor(
    private router: Router,
    private service: CoffeeService,
  ) {}

  ngOnInit(): void {
    this.getCoffee();
  }

  getCoffee() {
    let coffeeId = this.router.url.split('/')[2];
    this.service.getCoffeeById(coffeeId).subscribe((data: CoffeeModel) => {
      this.coffee = data;
    });
  }
}
