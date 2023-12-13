import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PickupLocationModel } from '../models/pickupLocation.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private baseUrl = 'http://localhost:5245/api/';

  constructor(private http: HttpClient) {}

  getPickupLocations(): Observable<PickupLocationModel[]> {
    return this.http.get<PickupLocationModel[]>(
      this.baseUrl + 'GetPickupLocations',
    );
  }
}
