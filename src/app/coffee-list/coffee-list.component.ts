import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoffeeModel} from "../add-coffee/coffee.model";

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})

export class CoffeeListComponent{
  @Output() coffeeToDelete: EventEmitter<CoffeeModel> = new EventEmitter<CoffeeModel>();
  @Input() coffeeList: CoffeeModel[] = [];

    deleteCoffee(coffee: CoffeeModel) {
      this.coffeeToDelete.emit(coffee);
    }
}
