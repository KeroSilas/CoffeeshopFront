import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieModel} from "../models/cookie.model";

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private baseUrl = 'http://localhost:5245/api/';

  constructor(private http: HttpClient) {
  }

  getCookiesByCoffee(id?: string): Observable<CookieModel[]> {
    return this.http.get<CookieModel[]>(this.baseUrl + 'CookiesByCoffee/' + id);
  }
}
