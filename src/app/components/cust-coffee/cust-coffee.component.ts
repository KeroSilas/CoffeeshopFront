import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from "@angular/router";
import {Guid} from "guid-typescript";
import {CustomCoffeeModel} from "../../models/customCoffee.model";
import {CustCoffeeService} from "../../services/cust-coffee.service";






@Component({
  selector: 'app-cust-coffee',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cust-coffee.component.html',
  styleUrl: './cust-coffee.component.css',
  providers: [CustCoffeeService],
})

export class custcoffeeComponent {
  data: CustomCoffeeModel[] = [];


  constructor(
    private service: CustCoffeeService) {
  }

  handleAddCustCoffee(formData: any) {
    this.addCustCoffee(formData.value);
    formData.reset();
  }

  addCustCoffee(coffee: CustomCoffeeModel) {
    let newCustCoffee = new CustomCoffeeModel();
    newCustCoffee.id = Guid.create().toString();
    newCustCoffee.beanId = coffee.beanId;
    newCustCoffee.brewingId = coffee.brewingId;
    newCustCoffee.price = coffee.price;
    this.service.createCustCoffee(newCustCoffee).subscribe((data: CustomCoffeeModel) => {
      console.log(data);
      this.data.push(data);
    });
  }
}
