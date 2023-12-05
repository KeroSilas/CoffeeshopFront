import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoffeeModel } from '../models/coffee.model';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private baseUrl = 'http://localhost:5245/api/coffee/';

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<CoffeeModel[]> {
    return this.http.get<CoffeeModel[]>(this.baseUrl + 'GetPredefinedCoffees');
  }

  getCoffeeById(id: string): Observable<CoffeeModel> {
    return this.http.get<CoffeeModel>(this.baseUrl + 'PredefinedCoffee/' + id);
  }

  createCoffee(coffee: CoffeeModel): Observable<CoffeeModel> {
    return this.http.post<CoffeeModel>(
      this.baseUrl + 'PredefinedCoffee/',
      coffee,
    );
  }

  updateCoffee(id: string, coffee: CoffeeModel): Observable<CoffeeModel> {
    return this.http.put<CoffeeModel>(
      this.baseUrl + 'PredefinedCoffee/' + id,
      coffee,
    );
  }

  deleteCoffee(id: string): Observable<CoffeeModel> {
    return this.http.delete<CoffeeModel>(
      this.baseUrl + 'PredefinedCoffee/' + id,
    );
  }
}
