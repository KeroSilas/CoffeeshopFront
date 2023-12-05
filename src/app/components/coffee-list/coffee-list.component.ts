import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeModel } from '../../models/coffee.model';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CoffeeDetailComponent } from '../coffee-detail/coffee-detail.component';

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
})
export class CoffeeListComponent {
  @Output() coffeeToDelete: EventEmitter<CoffeeModel> =
    new EventEmitter<CoffeeModel>();
  @Input() coffeeList: CoffeeModel[] = [];

  constructor(private router: Router) {}
  handleDeleteCoffee(coffee: CoffeeModel) {
    this.coffeeToDelete.emit(coffee);
  }

  onSelect(coffee: CoffeeModel) {
    this.router.navigate(['coffee/', coffee.id]).then((r) => console.log(r));
  }
}
