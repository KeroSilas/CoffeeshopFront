import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {UserStateService} from "../../services/user-state.service";
import {OrderService} from "../../services/order.service";
import {OrderModel} from "../../models/order.model";
import {OrderPickedupDTOModel} from "../../models/DTOs/orderPickedupDTO.model";

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css',
  providers: [OrderService],
})
export class AdminOrdersComponent {
  data: OrderModel[] = [];

  constructor(private router: Router, private orderService: OrderService, private userState: UserStateService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data: OrderModel[]) => {
      this.data = data;
    });
    if (!this.userState.isAdmin()) {
      this.router.navigate(['']).then((r) => console.log(r));
    }
  }

  deleteOrder(order: OrderModel) {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(order.id).subscribe((data: OrderModel) => {
        this.data = this.data.filter((o) => o !== order);
      });
    }
  }

  updateOrder(order: OrderModel) {
    let orderPickedup = new OrderPickedupDTOModel();
    orderPickedup.isPickedUp = !order.isPickedUp;
    this.orderService
      .updateOrder(order.id, orderPickedup)
      .subscribe((data: OrderPickedupDTOModel) => {
        console.log(data);
      });
  }
}
