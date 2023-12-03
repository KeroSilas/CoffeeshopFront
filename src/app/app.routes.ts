import { Routes } from '@angular/router';
import {AddCoffeeComponent} from "./add-coffee/add-coffee.component";
import {CoffeeDetailComponent} from "./coffee-detail/coffee-detail.component";

export const routes: Routes = [
  { path: '', redirectTo: 'coffee', pathMatch: 'full' },
  { path: 'coffee', component: AddCoffeeComponent },
  { path: 'coffee/:id', component: CoffeeDetailComponent },
  { path: '**', redirectTo: '' }
];
