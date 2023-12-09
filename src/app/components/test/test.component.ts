import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CoffeeAdditionsService} from "../../services/coffee-additions.service";
import {OrderService} from "../../services/order.service";
import {AdditionModel} from "../../models/addition.model";
import {OrderModel} from "../../models/order.model";
import {CoffeeBeanModel} from "../../models/coffeeBean.model";
import {BrewingMethodModel} from "../../models/brewingMethod.model";
import {CookieModel} from "../../models/cookie.model";
import {PickupLocationModel} from "../../models/pickupLocation.model";
import {Guid} from "guid-typescript";
import {UserStateService} from "../../services/user-state.service";
import {OrderDetailsModel} from "../../models/orderDetails.model";
import {CustomCoffeeModel} from "../../models/customCoffee.model";
import {CoffeeService} from "../../services/coffee.service";
import {PredefinedCoffeeModel} from "../../models/predefinedCoffee.model";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  providers: [CoffeeAdditionsService, OrderService, CoffeeService],
})
export class TestComponent implements OnInit {
  data: OrderModel[] = [];
  predefinedCoffees: PredefinedCoffeeModel[] = [];
  additions: AdditionModel[] = [];
  beans: CoffeeBeanModel[] = [];
  brewingMethods: BrewingMethodModel[] = [];
  cookies: CookieModel[] = [];
  pickupLocations: PickupLocationModel[] = [];

constructor(private service: CoffeeAdditionsService, private orderService: OrderService, private userState: UserStateService, private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.service.getAdditions().subscribe((data: AdditionModel[]) => {
      this.additions = data;
    });
    this.service.getCookies().subscribe((data: CookieModel[]) => {
      this.cookies = data;
    });
    this.service.getBrewingMethods().subscribe((data: BrewingMethodModel[]) => {
      this.brewingMethods = data;
    });
    this.service.getCoffeeBeans().subscribe((data: CoffeeBeanModel[]) => {
      this.beans = data;
    });
    this.orderService.getOrders().subscribe((data: OrderModel[]) => {
      this.data = data;
    });
    this.service.getPickupLocations().subscribe((data: PickupLocationModel[]) => {
      this.pickupLocations = data;
    });
    this.coffeeService.getCoffees().subscribe((data: PredefinedCoffeeModel[]) => {
      this.predefinedCoffees = data;
    });
  }

  handleAddOrder(formData: any) {
    this.addOrder(formData.value);
  }

  // TODO: Very broken right now, fix later
  addOrder(order: OrderModel) {
    let newOrder = new OrderModel();
    newOrder.id = Guid.create().toString();
    newOrder.userId = this.userState.currentUser.id;
    newOrder.locationId = order.locationId;
    newOrder.totalPrice = order.totalPrice;
    newOrder.orderTime = new Date();
    newOrder.pickupTime = new Date();
    newOrder.isCompleted = false;
    newOrder.isPickedUp = false;

    /*let customCoffee = new CustomCoffeeModel();
    customCoffee.id = Guid.create().toString();
    customCoffee.price = 100;
    customCoffee.beanId =*/

    let orderDetail = new OrderDetailsModel();
    orderDetail.id = Guid.create().toString();
    orderDetail.orderId = newOrder.id;
    orderDetail.price = 100;
    orderDetail.predefinedCoffeeId = '';
    orderDetail.customCoffeeId = '';

    newOrder.orderDetails.push(new OrderDetailsModel())
    this.orderService.createOrder(newOrder).subscribe((data: OrderModel) => {
      console.log(data);
      this.data.push(data);
    });
  }
}
