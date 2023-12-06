import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl = 'http://localhost:5245/api/order/';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.baseUrl + 'GetOrders');
  }

  getOrderById(id: string): Observable<OrderModel> {
    return this.http.get<OrderModel>(this.baseUrl + id);
  }

  createOrder(user: OrderModel): Observable<OrderModel> {
    return this.http.post<OrderModel>(this.baseUrl, user);
  }

  updateOrder(id: string, user: OrderModel): Observable<OrderModel> {
    return this.http.put<OrderModel>(this.baseUrl + id, user);
  }

  deleteOrder(id: string): Observable<OrderModel> {
    return this.http.delete<OrderModel>(this.baseUrl + id);
  }
}
