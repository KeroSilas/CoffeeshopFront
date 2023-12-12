import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { PredefinedCoffeeModel } from '../../models/predefinedCoffee.model';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CoffeeDetailComponent } from '../coffee-detail/coffee-detail.component';
import {UserStateService} from "../../services/local/user-state.service";
import {CoffeeService} from "../../services/coffee.service";
import {MatIconModule} from "@angular/material/icon";
import {ShoppingCartService} from "../../services/local/shopping-cart.service";
import {OrderDetailsModel} from "../../models/orderDetails.model";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CoffeeDetailComponent,
    NgOptimizedImage,
    MatIconModule,
  ],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
  providers: [CoffeeService],
})
export class CoffeeListComponent implements OnInit {
  data: PredefinedCoffeeModel[] = [];

  constructor(
    private router: Router,
    private coffeeService: CoffeeService,
    private userState: UserStateService,
    private shoppingCartService: ShoppingCartService,
  ) {}

  ngOnInit(): void {
    if (!this.userState.isLoggedIn()) {
      this.router.navigate(['login']).then((r) => console.log(r));
    }
    this.coffeeService
      .getCoffees()
      .subscribe((data: PredefinedCoffeeModel[]) => {
        this.data = data;
      });
  }

  handleAddToCart(coffee: PredefinedCoffeeModel) {
    let orderDetail = new OrderDetailsModel();
    orderDetail.id = Guid.create().toString();
    orderDetail.predefinedCoffeeId = coffee.id;
    this.shoppingCartService.addItemToOrder(orderDetail);
  }
}
