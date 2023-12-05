import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredefinedCoffeeModel } from '../../models/predefinedCoffee.model';
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
  @Output() coffeeToDelete: EventEmitter<PredefinedCoffeeModel> =
    new EventEmitter<PredefinedCoffeeModel>();
  @Input() coffeeList: PredefinedCoffeeModel[] = [];

  constructor(private router: Router) {}
  handleDeleteCoffee(coffee: PredefinedCoffeeModel) {
    this.coffeeToDelete.emit(coffee);
  }

  onSelect(coffee: PredefinedCoffeeModel) {
    this.router.navigate(['coffee/', coffee.id]).then((r) => console.log(r));
  }
}
