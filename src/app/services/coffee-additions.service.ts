import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdditionModel } from '../models/addition.model';
import { CookieModel } from '../models/cookie.model';
import { BrewingMethodModel } from '../models/brewingMethod.model';
import { CoffeeBeanModel } from '../models/coffeeBean.model';
import { PickupLocationModel } from '../models/pickupLocation.model';

@Injectable({
  providedIn: 'root',
})
export class CoffeeAdditionsService {
  private baseUrl = 'http://localhost:5245/api/';

  constructor(private http: HttpClient) {}

  getAdditions(): Observable<AdditionModel[]> {
    return this.http.get<AdditionModel[]>(this.baseUrl + 'GetAdditions/');
  }

  getAdditionById(id: string): Observable<AdditionModel> {
    return this.http.get<AdditionModel>(this.baseUrl + 'addition/' + id);
  }

  createAddition(addition: AdditionModel): Observable<AdditionModel> {
    return this.http.post<AdditionModel>(this.baseUrl + 'addition/', addition);
  }

  updateAddition(
    id: string,
    addition: AdditionModel,
  ): Observable<AdditionModel> {
    return this.http.put<AdditionModel>(
      this.baseUrl + 'addition/' + id,
      addition,
    );
  }

  deleteAddition(id: string): Observable<AdditionModel> {
    return this.http.delete<AdditionModel>(this.baseUrl + 'addition/' + id);
  }

  getCookies(): Observable<CookieModel[]> {
    return this.http.get<CookieModel[]>(this.baseUrl + 'GetCookies/');
  }

  getCookieById(id: string): Observable<CookieModel> {
    return this.http.get<CookieModel>(this.baseUrl + 'cookie/' + id);
  }

  createCookie(cookie: CookieModel): Observable<CookieModel> {
    return this.http.post<CookieModel>(this.baseUrl + 'cookie/', cookie);
  }

  updateCookie(id: string, cookie: CookieModel): Observable<CookieModel> {
    return this.http.put<CookieModel>(this.baseUrl + 'cookie/' + id, cookie);
  }

  deleteCookie(id: string): Observable<CookieModel> {
    return this.http.delete<CookieModel>(this.baseUrl + 'cookie/' + id);
  }

  getBrewingMethods(): Observable<BrewingMethodModel[]> {
    return this.http.get<BrewingMethodModel[]>(
      this.baseUrl + 'GetBrewingMethods/',
    );
  }

  getBrewingMethodById(id: string): Observable<BrewingMethodModel> {
    return this.http.get<BrewingMethodModel>(
      this.baseUrl + 'brewingmethod/' + id,
    );
  }

  createBrewingMethod(
    brewingMethod: BrewingMethodModel,
  ): Observable<BrewingMethodModel> {
    return this.http.post<BrewingMethodModel>(
      this.baseUrl + 'brewingmethod/',
      brewingMethod,
    );
  }

  updateBrewingMethod(
    id: string,
    brewingMethod: BrewingMethodModel,
  ): Observable<BrewingMethodModel> {
    return this.http.put<BrewingMethodModel>(
      this.baseUrl + 'brewingmethod/' + id,
      brewingMethod,
    );
  }

  deleteBrewingMethod(id: string): Observable<BrewingMethodModel> {
    return this.http.delete<BrewingMethodModel>(
      this.baseUrl + 'brewingmethod/' + id,
    );
  }

  getCoffeeBeans(): Observable<CoffeeBeanModel[]> {
    return this.http.get<CoffeeBeanModel[]>(this.baseUrl + 'GetCoffeeBeans/');
  }

  getCoffeeBeanById(id: string): Observable<CoffeeBeanModel> {
    return this.http.get<CoffeeBeanModel>(this.baseUrl + 'coffeebean/' + id);
  }

  createCoffeeBean(coffeeBean: CoffeeBeanModel): Observable<CoffeeBeanModel> {
    return this.http.post<CoffeeBeanModel>(
      this.baseUrl + 'coffeebean/',
      coffeeBean,
    );
  }

  updateCoffeeBean(
    id: string,
    coffeeBean: CoffeeBeanModel,
  ): Observable<CoffeeBeanModel> {
    return this.http.put<CoffeeBeanModel>(
      this.baseUrl + 'coffeebean/' + id,
      coffeeBean,
    );
  }

  deleteCoffeeBean(id: string): Observable<CoffeeBeanModel> {
    return this.http.delete<CoffeeBeanModel>(this.baseUrl + 'coffeebean/' + id);
  }

  getPickupLocations(): Observable<PickupLocationModel[]> {
    return this.http.get<PickupLocationModel[]>(
      this.baseUrl + 'GetPickupLocations/',
    );
  }

  getPickupLocationById(id: string): Observable<PickupLocationModel> {
    return this.http.get<PickupLocationModel>(
      this.baseUrl + 'pickuplocation/' + id,
    );
  }

  createPickupLocation(
    pickupLocation: PickupLocationModel,
  ): Observable<PickupLocationModel> {
    return this.http.post<PickupLocationModel>(
      this.baseUrl + 'pickuplocation/',
      pickupLocation,
    );
  }

  updatePickupLocation(
    id: string,
    pickupLocation: PickupLocationModel,
  ): Observable<PickupLocationModel> {
    return this.http.put<PickupLocationModel>(
      this.baseUrl + 'pickuplocation/' + id,
      pickupLocation,
    );
  }

  deletePickupLocation(id: string): Observable<PickupLocationModel> {
    return this.http.delete<PickupLocationModel>(
      this.baseUrl + 'pickuplocation/' + id,
    );
  }
}
