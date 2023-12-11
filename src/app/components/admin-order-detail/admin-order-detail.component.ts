import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderModel} from "../../models/order.model";
import {OrderService} from "../../services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-order-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-order-detail.component.html',
  styleUrl: './admin-order-detail.component.css',
  providers: [OrderService],
})
export class AdminOrderDetailComponent implements OnInit{
  order: OrderModel = new OrderModel();
  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    let orderId = this.router.url.split('/')[3];
    this.orderService.getOrderById(orderId).subscribe((data: OrderModel) => {
      this.order = data;
    });
  }

}
