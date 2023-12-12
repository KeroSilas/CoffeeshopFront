import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PredefinedCoffeeModel } from '../models/predefinedCoffee.model';
import {CommentModel} from "../models/comment.model";

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private baseUrl = 'http://localhost:5245/api/coffee/';

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<PredefinedCoffeeModel[]> {
    return this.http.get<PredefinedCoffeeModel[]>(this.baseUrl + 'GetPredefinedCoffees');
  }

  getCoffeeById(id?: string): Observable<PredefinedCoffeeModel> {
    return this.http.get<PredefinedCoffeeModel>(this.baseUrl + 'PredefinedCoffee/' + id);
  }

  createCoffee(coffee: PredefinedCoffeeModel): Observable<PredefinedCoffeeModel> {
    return this.http.post<PredefinedCoffeeModel>(
      this.baseUrl + 'PredefinedCoffee/',
      coffee,
    );
  }

  updateCoffee(id: string, coffee: PredefinedCoffeeModel): Observable<PredefinedCoffeeModel> {
    return this.http.put<PredefinedCoffeeModel>(
      this.baseUrl + 'PredefinedCoffee/' + id,
      coffee,
    );
  }

  deleteCoffee(id: string): Observable<PredefinedCoffeeModel> {
    return this.http.delete<PredefinedCoffeeModel>(
      this.baseUrl + 'PredefinedCoffee/' + id,
    );
  }

}
