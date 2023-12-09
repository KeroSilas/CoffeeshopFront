import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {OrderService} from "../../services/order.service";
import {OrderModel} from "../../models/order.model";
import {Guid} from "guid-typescript";
import {UserStateService} from "../../services/user-state.service";
import {OrderDetailsModel} from "../../models/orderDetails.model";
import {CoffeeService} from "../../services/coffee.service";
import {PredefinedCoffeeModel} from "../../models/predefinedCoffee.model";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  providers: [OrderService, CoffeeService],
})
export class TestComponent implements OnInit {
  data: OrderModel[] = [];
  predefinedCoffees: PredefinedCoffeeModel[] = [];

constructor(private orderService: OrderService, private userState: UserStateService, private coffeeService: CoffeeService) {}
  coffee: PredefinedCoffeeModel = new PredefinedCoffeeModel();

  ngOnInit(): void {
    this.coffeeService.getCoffees().subscribe((data: PredefinedCoffeeModel[]) => {
      this.predefinedCoffees = data;
    });
  }

  // TODO: Very broken right now, fix later
  addOrder() {
    let newOrder: OrderModel = {
      id: Guid.create().toString(),
      userId: this.userState.currentUser.id,
      locationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      totalPrice: 200,
      orderTime: new Date(),
      pickupTime: new Date(),
      isCompleted: true,
      isPickedUp: false,
      orderDetails: [],
    }

    let orderDetail: OrderDetailsModel = {
      id: Guid.create().toString(),
      orderId: newOrder.id,
      price: 100,
      predefinedCoffeeId: this.coffee.id,
      customCoffeeId: undefined,
      cookieId: undefined,
      quantity: 1,
    }

    newOrder.orderDetails.push(orderDetail);
    this.orderService.createOrder(newOrder).subscribe((data: OrderModel) => {
      console.log(data);
      this.data.push(data);
    });
  }

  getSelectedValue(event: any) {
    this.coffee = event.target.value;
  }
}
