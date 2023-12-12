import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CookieService} from "../../services/cookie.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {CoffeeService} from "../../services/coffee.service";
import {PredefinedCoffeeModel} from "../../models/predefinedCoffee.model";
import {OrderService} from "../../services/order.service";
import {OrderModel} from "../../models/order.model";
import {LocationService} from "../../services/location.service";
import {PickupLocationModel} from "../../models/pickupLocation.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
  providers: [CookieService, CoffeeService, OrderService, LocationService]
})
export class ShoppingCartComponent implements OnInit{
  orders: OrderModel[] = [];
  coffees: PredefinedCoffeeModel[] = [];
  locations: PickupLocationModel[] = [];
  location: PickupLocationModel = new PickupLocationModel();

  constructor(public shoppingCartService: ShoppingCartService,
              private coffeeService: CoffeeService,
              private orderService: OrderService,
              private locationService: LocationService
              ){}

  ngOnInit(): void {
    this.shoppingCartService.getOrder().orderDetails.forEach((item) => {
      this.coffeeService.getCoffeeById(item.predefinedCoffeeId).subscribe((data: PredefinedCoffeeModel) => {
        this.coffees.push(data);
      });
    });
    this.locationService.getPickupLocations().subscribe((data: PickupLocationModel[]) => {
      this.locations = data;
    });
  }

  confirmOrder() {
    let newOrder = this.shoppingCartService.getOrder();
    newOrder.locationId = this.location.id;
    console.log(newOrder);
    this.orderService.createOrder(newOrder).subscribe((data: OrderModel) => {
      this.orders.push(data);
    });
  }

  getSelectedValue(event: any) {
    this.location = event.target.value;
  }
}
