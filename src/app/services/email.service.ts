import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../models/order.model';
import { EmailModel } from '../models/email.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl = 'http://localhost:5245/api/';

  constructor(private http: HttpClient) {}

  sendEmail(email: EmailModel) {
    console.log(email);
    return this.http.post<EmailModel>(this.baseUrl, email);
  }
}
