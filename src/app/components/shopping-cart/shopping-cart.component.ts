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
import { EmailService } from '../../services/email.service';
import { EmailModel } from '../../models/email.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
  providers: [
    CookieService,
    CoffeeService,
    OrderService,
    LocationService,
    EmailService,
  ],
})
export class ShoppingCartComponent implements OnInit {
  orders: OrderModel[] = [];
  order: OrderModel = new OrderModel();
  coffees: PredefinedCoffeeModel[] = [];
  locations: PickupLocationModel[] = [];
  selectedLocation: PickupLocationModel = new PickupLocationModel();
  selectedTime: Date = new Date();
  availablePickupTimes: Date[] = [];

  constructor(
    public shoppingCartService: ShoppingCartService,
    private coffeeService: CoffeeService,
    private orderService: OrderService,
    private locationService: LocationService,
    private userStateService: UserStateService,
    private emailService: EmailService,
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
    this.getAvailablePickupTimes();
  }

  confirmOrder() {
    let newOrder = this.order;
    newOrder.userId = this.userStateService.getUser().id;
    newOrder.locationId = this.selectedLocation.id;
    newOrder.pickupTime = this.selectedTime;
    this.orderService.createOrder(newOrder).subscribe((data: OrderModel) => {
      this.orders.push(data);
    });

    let email: EmailModel = {
      to: this.userStateService.getUser().email,
      subject: 'Order Confirmation',
      message:
        'Your order has been placed and will be ready for pickup at ' +
        this.selectedTime +
        ' at ' +
        this.selectedLocation.shopName +
        '.',
    };
    this.emailService.sendEmail(email);
  }

  getAvailablePickupTimes() {
    let now = new Date();
    let twoHoursFromNow = new Date();
    twoHoursFromNow.setHours(now.getHours() + 2);
    let pickupTime = new Date(now);
    while (pickupTime < twoHoursFromNow) {
      this.availablePickupTimes.push(pickupTime);
      pickupTime = new Date(pickupTime.getTime() + 15 * 60000);
    }
  }
}
