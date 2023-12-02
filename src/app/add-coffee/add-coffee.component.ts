import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from "../coffee.service";
import { CoffeeModel } from "./coffee.model";
import { FormsModule } from "@angular/forms";
import {CoffeeListComponent} from "../coffee-list/coffee-list.component";

@Component({
  selector: 'app-add-coffee',
  standalone: true,
  imports: [CommonModule, FormsModule, CoffeeListComponent],
  templateUrl: './add-coffee.component.html',
  styleUrl: './add-coffee.component.css',
  providers: [CoffeeService]
})

export class AddCoffeeComponent implements OnInit{
  data: CoffeeModel[] = [];

  constructor(private service: CoffeeService) {
  }

  ngOnInit(): void {
    this.service.getCoffees().subscribe((data: CoffeeModel[]) => {
      this.data = data;
    });
  }

  handleAddCoffee(formData: any) {
    this.addCoffee(formData.value);
  }

  addCoffee(coffee: CoffeeModel) {
    let newCoffee = new CoffeeModel();
    newCoffee.name = coffee.name;
    newCoffee.price = coffee.price;
    newCoffee.description = coffee.description;
    this.service.createCoffee(newCoffee).subscribe((data: CoffeeModel) => {
      console.log(data);
      this.data.push(data);
    });
  }
}
