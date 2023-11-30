import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CoffeeModel} from "./test/coffee.model";

@Injectable({
  providedIn: 'root'
})

export class CoffeeService {
  private baseUrl = "http://localhost:5245/api/coffee/";

  constructor(private http: HttpClient) { }

  getCoffees() : Observable<Object> {
    return this.http.get(this.baseUrl + "/getpredefinedcoffees");
  }

  addCoffee(coffee: CoffeeModel) : Observable<any> {
    return this.http.post(this.baseUrl + "/predefinedcoffee", coffee);
  }

  deleteCoffee(id: string) : Observable<any> {
    return this.http.delete(this.baseUrl + "/predefinedcoffee/" + id);
  }

  getCoffee(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + "/predefinedcoffee/" + id);
  }

  updateCoffee(id: string, coffee: CoffeeModel) : Observable<any> {
    return this.http.put(this.baseUrl + "/predefinedcoffee/" + id, coffee);
  }
}
