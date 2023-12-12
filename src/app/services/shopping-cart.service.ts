import { Injectable } from '@angular/core';
import {OrderModel} from "../models/order.model";
import {OrderDetailsModel} from "../models/orderDetails.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private order = new OrderModel();
  getOrder(): OrderModel {
    return this.order;
  }

  clearOrder() {
    this.order = new OrderModel();
  }

  addItemToOrder(item: OrderDetailsModel) {
    console.log('Added item to order');
    console.log(item);
    this.order.orderDetails.push(item);
    console.log(this.order);
  }

  removeItemFromOrder(item: OrderDetailsModel) {
    let index = this.order.orderDetails.indexOf(item);
    this.order.orderDetails.splice(index, 1);
  }
}
