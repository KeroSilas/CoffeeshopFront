import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomCoffeeModel } from '../models/customCoffee.model';

@Injectable({
  providedIn: 'root',
})
export class CustCoffeeService {
  private baseUrl = 'http://localhost:5245/api/Customcoffee/';

  constructor(private http: HttpClient) {}

  createCustCoffee(coffee: CustomCoffeeModel): Observable<CustomCoffeeModel> {
    return this.http.post<CustomCoffeeModel>(
      this.baseUrl + 'CustomCoffee/',
      coffee,
    );
  }
}
