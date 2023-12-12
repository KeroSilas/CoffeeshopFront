import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from '../../services/cookie.service';
import { ShoppingCartService } from '../../services/local/shopping-cart.service';
import { CoffeeService } from '../../services/coffee.service';
import { PredefinedCoffeeModel } from '../../models/predefinedCoffee.model';
import { OrderService } from '../../services/order.service';
import { OrderModel } from '../../models/order.model';
import { LocationService } from '../../services/location.service';
import { PickupLocationModel } from '../../models/pickupLocation.model';
import { FormsModule } from '@angular/forms';
import { UserStateService } from '../../services/local/user-state.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
  providers: [CookieService, CoffeeService, OrderService, LocationService],
})
export class ShoppingCartComponent implements OnInit {
  orders: OrderModel[] = [];
  order: OrderModel = new OrderModel();
  coffees: PredefinedCoffeeModel[] = [];
  locations: PickupLocationModel[] = [];
  selectedLocation: PickupLocationModel = new PickupLocationModel();

  constructor(
    public shoppingCartService: ShoppingCartService,
    private coffeeService: CoffeeService,
    private orderService: OrderService,
    private locationService: LocationService,
    private userStateService: UserStateService,
  ) {}

  ngOnInit(): void {
    this.shoppingCartService.getOrder().subscribe((data) => {
      data.orderDetails.forEach((orderDetail) => {
        this.coffeeService
          .getCoffeeById(orderDetail.predefinedCoffeeId)
          .subscribe((coffee: PredefinedCoffeeModel) => {
            this.coffees.push(coffee);
          });
      });
      this.order = data;
    });
    this.locationService
      .getPickupLocations()
      .subscribe((data: PickupLocationModel[]) => {
        this.locations = data;
      });
  }

  confirmOrder() {
    let newOrder = this.order;
    newOrder.userId = this.userStateService.getUser().id;
    newOrder.locationId = this.selectedLocation.id;
    this.orderService.createOrder(newOrder).subscribe((data: OrderModel) => {
      this.orders.push(data);
    });
  }
}
