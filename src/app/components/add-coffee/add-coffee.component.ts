import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeModel } from '../../models/coffee.model';
import { FormsModule } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { CoffeeListComponent } from '../coffee-list/coffee-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-coffee',
  standalone: true,
  imports: [CommonModule, FormsModule, CoffeeListComponent, RouterOutlet],
  templateUrl: './add-coffee.component.html',
  styleUrl: './add-coffee.component.css',
  providers: [CoffeeService],
})
export class AddCoffeeComponent implements OnInit {
  data: CoffeeModel[] = [];

  constructor(private service: CoffeeService) {}

  ngOnInit(): void {
    this.service.getCoffees().subscribe((data: CoffeeModel[]) => {
      this.data = data;
    });
  }

  handleAddCoffee(formData: any) {
    this.addCoffee(formData.value);
    formData.reset();
  }

  addCoffee(coffee: CoffeeModel) {
    let newCoffee = new CoffeeModel();
    newCoffee.id = Guid.create().toString();
    newCoffee.name = coffee.name;
    newCoffee.price = coffee.price;
    newCoffee.description = coffee.description;
    this.service.createCoffee(newCoffee).subscribe((data: CoffeeModel) => {
      console.log(data);
      this.data.push(data);
    });
  }

  deleteCoffee(coffeeToDelete: CoffeeModel) {
    this.service
      .deleteCoffee(coffeeToDelete.id)
      .subscribe((data: CoffeeModel) => {
        console.log(data);
        this.data = this.data.filter(
          (coffee: CoffeeModel) => coffee.id !== coffeeToDelete.id,
        );
      });
  }
}
