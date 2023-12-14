import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailModel } from '../models/email.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl = 'http://localhost:5245/api/Email/SendMail';

  constructor(private http: HttpClient) {}

  sendEmail(email: EmailModel) {
    return this.http.post(this.baseUrl, email);
  }
}
