import { Injectable } from '@angular/core';
import {OrderModel} from "../../models/order.model";
import {OrderDetailsModel} from "../../models/orderDetails.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private order = new OrderModel();
  getOrder(): Observable<OrderModel> {
    return new Observable<OrderModel>((observer) => {
      observer.next(this.order);
    });
  }

  clearOrder() {
    this.order = new OrderModel();
  }

  addItemToOrder(item: OrderDetailsModel) {
    this.order.orderDetails.push(item);
  }

  removeItemFromOrder(item: OrderDetailsModel) {
    let index = this.order.orderDetails.indexOf(item);
    this.order.orderDetails.splice(index, 1);
  }
}
