import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from "../coffee.service";
import {CoffeeModel} from "./coffee.model";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  data: any;
  isDisabled = false;

  constructor(private service: CoffeeService) {
    this.data = [];
  }

  addCoffee(coffee: CoffeeModel): void{
    let newCoffee = new CoffeeModel();
    this.service.addCoffee(newCoffee).subscribe((response) => {
      console.log(response);
      this.data.push(response);
    });
  }

  deleteCoffee(id: string) {
    this.service.deleteCoffee(id).subscribe(
      data => {
        console.log(data);
      });

    let index = this.data.findIndex((x: { id: string; }) => x.id === id);
    this.data.splice(index, 1);
  }

  getCoffee(id: string):any {
    return this.service.getCoffee(id).subscribe(data => {
    });
  }

  handleNewCoffeeEvent($event: any) {
    this.addCoffee($event);
  }

  handleUpdateCoffee(coffee: CoffeeModel) {
    this.service.updateCoffee(coffee.id, coffee);
  }

}
